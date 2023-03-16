import * as React from "react";
import {
  Button,
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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getComparator, stableSort } from "../../util/tableUtils";
import EnhancedTableHead from "../../components/table/EnhancedTableHead";
import EnhancedTableToolbar from "../../components/table/EndnacedToolbar";
import { useSelector } from "react-redux";
import FormDialog from "../../components/feedback/FormDialog";
import CustomPagination from "../../components/table/CustomPagination";
import { departmentHeadCells } from "../../constant/hc_department";
import { BsEyeFill } from "react-icons/bs";
import Loading from "../../components/progress/Loading";
import { departmentDelete } from "../../api/department";

const title = "部门";

export default function DepartmentTable({ data, setData }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [formDialog, setFormDialog] = React.useState({
    open: false,
    type: "error",
    title: "删除选中部门",
    label: "输入'确定'执行操作",
    inputType: "error",
    msg: "确定要删除选中部门吗",
    buttonMsg: "确定",
  });
  const navigate = useNavigate();
  const username = useSelector((state) => state.login.username);

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
    selected.forEach((e) => {
      departmentDelete(e);
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
              rowCount={data.length}
              headCells={departmentHeadCells}
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
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.manager}</TableCell>
                      <TableCell align="right">{row.budget}</TableCell>
                      <TableCell align="right">{row.createTime}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="outlined"
                          onClick={() => {
                            navigate(`/${username}/department/${row.id}`);
                          }}
                        >
                          查看
                          <BsEyeFill />
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
        <CustomPagination
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
