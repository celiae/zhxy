import * as React from "react";
import {
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  Checkbox,
  TableContainer,
  TablePagination,
  FormControlLabel,
  Paper,
  Switch,
  TableRow,
  Avatar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import EnhancedTableHead from "./tool/EnhancedTableHead";
import EnhancedTableToolbar from "./tool/EndnacedToolbar";
import { useSelector } from "react-redux";
import FormDialog from "../feedback/FormDialog";
import { studentHeadCells } from "../../constant/headCells";
import { selectLoginInfo } from "../../store/loginSlice";
import { getComparator, stableSort } from "../../util/tableUtils";
import { studentDelete } from "../../server/student";
import Loading from "../progress/Loading";
import { studentDetailDelete } from "../../server/studentdetail";
import { studentMediaDeleteByStudentId } from "../../server/studentmedia";

const title = "学生管理";

export default function StudentTable({ data, setData }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [formDialog, setFormDialog] = React.useState({
    open: false,
    type: "error",
    title: "删除选中学生",
    label: "输入'确定'执行操作",
    inputType: "error",
    msg: "确定要删除所有学生吗",
    buttonMsg: "确定",
  });
  const user = useSelector(selectLoginInfo);
  const navigate = useNavigate();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.id);
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
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleDelete = () => {
    selected.forEach(async (e) => {
      await studentMediaDeleteByStudentId(e);
      await studentDetailDelete(e);
      await studentDelete(e);
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
              rowCount={data.length}
              headCells={studentHeadCells}
            />
            <TableBody>
              {stableSort(data, getComparator(order, orderBy))
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
                        <Avatar src={row.avatar} />
                      </TableCell>
                      <TableCell align="right">
                        {(row.lab && row.lab.name) || "未参加"}
                      </TableCell>
                      <TableCell align="right">{row.lastLogin}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="outlined"
                          onClick={() => {
                            navigate(`/${user.username}/student/${row.id}`);
                          }}
                        >
                          查看
                        </Button>
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          labelRowsPerPage="每页展示行数"
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="紧密显示"
      />
    </Box>
  );
}
