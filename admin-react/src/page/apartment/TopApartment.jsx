import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { goodApartmentList } from "../../api/goodapartment";
import Loading from "../../components/progress/Loading";

export default function TopApartment() {
  const navigate = useNavigate();
  const { data, status } = useQuery("goodApartmentList", goodApartmentList);
  const toApartment = (id) => {
    navigate(`${id}`, { replace: true });
  };
  if (status === "loading") return <Loading />;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">优秀寝室</Typography>
      </Grid>
      <Grid item xs={12}>
        {data.map((goodapartment) => (
          <Card key={goodapartment.id}>
            <CardActionArea
              onClick={() => {
                toApartment(goodapartment.apartment.id);
              }}
            >
              <CardContent>
                <Grid container spacing={2} alignItems="center">
                  <Grid item md={6} lg={4}>
                    <Typography variant="h5">
                      {goodapartment.apartment.buildingNum}-
                      {goodapartment.apartment.roomNum}
                    </Typography>
                  </Grid>
                  <Grid item md={6} lg={4}>
                    <Typography variant="caption">
                      {goodapartment.date}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}
