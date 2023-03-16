import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import { AiFillDelete, AiFillFilter } from "react-icons/ai";
import {
  IconButton,
  Tooltip,
  Toolbar,
  Typography,
  Box,
  Grid,
  Stack,
  FormControlLabel,
  Switch,
} from "@mui/material";
import RouteButton from "../button/RouteButton";

export default function EnhancedTableToolbar(props) {
  const {
    numSelected,
    title,
    formDialog,
    setFormDialog,
    dense,
    handleChangeDense,
  } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      <Grid container justifyContent={"space-between"}>
        {numSelected > 0 ? (
          <Grid item>
            <Typography color="inherit" variant="subtitle1" component="div">
              已选中 {numSelected} 个
            </Typography>
          </Grid>
        ) : (
          <Grid item>
            <Stack direction={"row"} spacing={2}>
              <Typography variant="h6" id="tableTitle" component="div">
                {title}
              </Typography>
              <RouteButton path={"create"} msg="添加" />
              <FormControlLabel
                control={
                  <Switch checked={dense} onChange={handleChangeDense} />
                }
                label="紧密显示"
              />
            </Stack>
          </Grid>
        )}

        {numSelected > 0 ? (
          <Grid item>
            <Tooltip title="删除选中">
              <IconButton
                onClick={() => {
                  setFormDialog({ ...formDialog, open: true });
                }}
              >
                <AiFillDelete />
              </IconButton>
            </Tooltip>
          </Grid>
        ) : (
          <Grid item>
            <Tooltip title="过滤">
              <IconButton>
                <AiFillFilter />
              </IconButton>
            </Tooltip>
          </Grid>
        )}
      </Grid>
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
