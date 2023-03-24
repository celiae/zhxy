import React from "react";
import {
  Box,
  Button,
  LinearProgress,
  Stack,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import RouteButton from "../button/RouteButton";
import CeAlertDialog from "../feedback/CeAlertDialog";
import { DataGrid, GridToolbar, useGridApiRef, zhCN } from "@mui/x-data-grid";

export default function CusDataGrid({ columns, rows, handleDeleteAll }) {
  const apiRef = useGridApiRef();
  const [alert, setAlert] = React.useState({
    open: false,
    title: "删除",
    dialogContentText: "删除所有",
    buttonDisagree: "不删",
    buttonAgree: "全部删除",
  });
  const openAlert = () => {
    setAlert({ ...alert, open: true });
  };
  return (
    <Grid container spacing={2} p>
      <Grid item>
        <CeAlertDialog
          alertDialog={alert}
          setAlertDialog={setAlert}
          handleSubmit={handleDeleteAll}
        />
      </Grid>
      <Grid item xs={12}>
        <Stack direction={"row"} spacing={3}>
          <RouteButton path={"create"} msg={"添加"} />
          <Button color="error" onClick={openAlert}>
            全部删除
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent sx={{ overflow: "auto" }}>
            <Grid item>
              <Box sx={{ height: 650, width: "100%" }}>
                <DataGrid
                  localeText={
                    zhCN.components.MuiDataGrid.defaultProps.localeText
                  }
                  apiRef={apiRef}
                  loading={rows ? false : true}
                  rows={rows ? rows : []}
                  columns={columns}
                  checkboxSelection
                  disableRowSelectionOnClick
                  slots={{
                    loadingOverlay: LinearProgress,
                    toolbar: GridToolbar,
                  }}
                />
              </Box>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
