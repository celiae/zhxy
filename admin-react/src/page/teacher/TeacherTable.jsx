import * as React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  Checkbox,
  TableContainer,
  FormControlLabel,
  Paper,
  Switch,
  TableRow,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getComparator, stableSort } from "../../util/tableUtils";
import EnhancedTableHead from "../../components/table/EnhancedTableHead";
import EnhancedTableToolbar from "../../components/table/EndnacedToolbar";
import { useSelector } from "react-redux";
import CustomPagination from "../../components/table/CustomPagination";
import FormDialog from "../../components/feedback/FormDialog";
import { teacherHeadCells } from "../../constant/hc_teacher";
import { teacherDelete } from "../../api/teacher";
import Loading from "../../components/progress/Loading";
import RouteButton from "../../components/button/RouteButton";

const title = "教师";

export default function TeacherTable({ data, setData }) {
  const rows = data;
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [formDialog, setFormDialog] = React.useState({
    open: false,
    type: "error",
    title: "删除选中教师",
    label: "输入'确定'执行操作",
    inputType: "error",
    msg: "确定要删除所有教师吗",
    buttonMsg: "确定",
  });
  const username = useSelector((state) => state.login.username);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleDelete = () => {
    selected.forEach((e) => {
      teacherDelete(e);
      setData((data) => data.filter((d) => d.id != e));
      setSelected([]);
    });
  };
  if (!data) return <Loading />;
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <FormDialog
          formDialog={formDialog}
          setFormDialog={setFormDialog}
          idList={selected}
          handleSubmit={handleDelete}
        />
        <EnhancedTableToolbar
          numSelected={selected.length}
          title={title}
          formDialog={formDialog}
          setFormDialog={setFormDialog}
          dense={dense}
          handleChangeDense={handleChangeDense}
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={teacherHeadCells}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            "aria-labelledby": labelId,
                          }}
                        />
                      </TableCell>
                      <TableCell align="right">
                        <Avatar src={row.avatar} />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.firstname}
                        {row.lastname}
                      </TableCell>
                      <TableCell align="right">
                        {(row.lab && row.lab.name) || "未参加"}
                      </TableCell>
                      <TableCell align="right">{row.jobTitle}</TableCell>
                      <TableCell align="right">
                        {(row.department && row.department.name) || "未参加"}
                      </TableCell>
                      <TableCell align="right">
                        <RouteButton
                          msg={"查看"}
                          path={`/${username}/teacher/${row.id}`}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <CustomPagination
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}