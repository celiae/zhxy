import { Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import { labDelete, labDetail } from "../../api/lab";
import TitleValue from "../../components/box/TitleValue";
import RouteButton from "../../components/button/RouteButton";
import DeleteButton from "../../components/button/DeleteButton";

export default function LabDetail() {
  const { id } = useParams();
  const { data, status } = useQuery(["labDetail", id], () => labDetail(id));
  if (status === "loading") return <Loading />;
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <RouteButton msg={"更改"} path="update" />
          </Grid>
          <Grid item xs={9}>
            <DeleteButton id={id} handleDelete={labDelete} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">{data.name}</Typography>
            <Typography variant="subtitle2">
              地点 {data.location}
              <LocationOnIcon />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TitleValue title="简介" value={data.description} />
            <Divider />
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <TitleValue title="失败项目" value={data.failedNum} />
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <TitleValue title="成功项目" value={data.successNum} />
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <TitleValue title="设备情况" value={data.deviceCondition} />
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <TitleValue title="设备资金" value={data.deviceCost} />
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <TitleValue title="项目资金" value={data.projectCost} />
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <TitleValue title="项目工作量资金" value={data.workload} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
