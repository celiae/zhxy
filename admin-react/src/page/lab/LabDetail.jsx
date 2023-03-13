import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import CurrencyYuanIcon from "@mui/icons-material/CurrencyYuan";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import LabRadar from "../../components/chart/LabRadar";
import Loading from "../../components/progress/Loading";
import { labDelete, labDetail } from "../../server/lab";

export default function LabDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, status } = useQuery(["labDetail", id], () => labDetail(id));
  const handleClick = () => {
    navigate("update");
  };
  const handleDelete = () => {
    labDelete(id);
    navigate(-1);
  };
  if (status === "loading") return <Loading />;
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h4">{data.name}</Typography>
            <Typography variant="subtitle2">
              地点 {data.location}
              <LocationOnIcon />
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={handleClick} variant="outlined">
              <BorderColorIcon />
              更改
            </Button>
            <Button onClick={handleDelete} color="error">
              删除
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">简介</Typography>
            <Typography variant="h6"> {data.description}</Typography>
            <Divider />
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <Typography variant="caption">失败项目</Typography>
            <Typography variant="h6"> {data.failedNum}</Typography>
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <Typography variant="caption">成功项目</Typography>
            <Typography variant="h6"> {data.successNum}</Typography>
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <Typography variant="caption">设备情况</Typography>
            <Typography variant="h6"> {data.deviceCondition}</Typography>
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <Typography variant="caption">设备资金</Typography>
            <Stack direction={"row"}>
              <CurrencyYuanIcon />
              <Typography variant="h6">{data.deviceCost}</Typography>
            </Stack>
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <Typography variant="caption">项目资金</Typography>
            <Typography variant="h6"> {data.projectCost}</Typography>
          </Grid>
          <Grid item xs={6} md={3} lg={2}>
            <Typography variant="caption">工作量</Typography>
            <Typography variant="h6"> {data.workload}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
