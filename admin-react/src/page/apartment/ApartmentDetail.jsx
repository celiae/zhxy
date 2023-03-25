import {
  Stack,
  Button,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { apartmentDelete, apartmentDetail } from "../../api/apartment";
import RouteButton from "../../components/button/RouteButton";
export default function ApartmentDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const apartment = useQuery(["apartmentDetail", id], () =>
    apartmentDetail(id)
  );
  const honour = () => {
    navigate("honour");
  };
  const handleDelete = () => {
    apartmentDelete(id);
    handleBack();
  };
  const handleBack = () => {
    navigate(-1);
  };
  if (apartment.status === "loading") return <Loading />;
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="caption">寝室</Typography>
            <Typography variant="h4">
              {apartment.data.buildingNum}-{apartment.data.roomNum}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="caption">地点</Typography>
            <Typography variant="h6">{apartment.data.location}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">水费余额</Typography>
            <Typography variant="h6">{apartment.data.waterFee}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">电费余额</Typography>
            <Typography variant="h6">
              {apartment.data.electricityBill}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="caption">描述</Typography>
            <Typography variant="h6">{apartment.data.description}</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Stack direction={"row"} spacing={1}>
              <RouteButton path={"update"} msg={"更改"} />
              <Button onClick={handleDelete} color="error">
                删除
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Stack direction={"row"} spacing={1}>
              <Button onClick={honour} variant="outlined">
                赋予优秀寝室称号
              </Button>
              <Button color="warning" onClick={honour} variant="outlined">
                取消优秀寝室称号
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
