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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getComparator, stableSort } from "../../util/tableUtils";
import EnhancedTableHead from "../../components/table/EnhancedTableHead";
import EnhancedTableToolbar from "../../components/table/EndnacedToolbar";
import { useSelector } from "react-redux";
import FormDialog from "../../components/feedback/FormDialog";
import CustomPagination from "../../components/table/CustomPagination";
import { labHeadCells } from "../../constant/hc_lab";
import { labDelete } from "../../api/lab";
import Loading from "../../components/progress/Loading";
import RouteButton from "../../components/button/RouteButton";

const title = "实验室管理";

export default function LabTable({ data, setData }) {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [formDialog, setFormDialog] = React.useState({
    open: false,
    type: "error",
    title: "删除选中实验室",
    label: "输入'确定'执行操作",
    inputType: "error",
    msg: "确定要删除选中实验室吗",
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
      labDelete(e);
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
              headCells={labHeadCells}
            />
            <TableBody>
              {stableSort(data, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  if (row.description.length > 10) {
                    row.description =
                      row.description.trim().slice(0, 10) + "...";
                  }
                  if (row.name.length > 15) {
                    row.name = row.name.slice(0, 15) + "...";
                  }
                  if (row.location.length > 5) {
                    row.location = row.location.slice(0, 5) + "...";
                  }
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
                      <TableCell align="right">{row.description}</TableCell>
                      <TableCell align="right">{row.deviceCondition}</TableCell>
                      <TableCell align="right">{row.location}</TableCell>
                      <TableCell align="right">{row.projectCost}</TableCell>
                      <TableCell align="right">
                        <RouteButton
                          msg={"查看"}
                          path={`/${username}/lab/${row.id}`}
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
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="紧密显示"
      />
    </Box>
  );
}
