import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import RouteButton from "../../components/button/RouteButton";
import Loading from "../../components/progress/Loading";

export default function TopStudent({ title, data, status }) {
  if (status === "loading") return <Loading />;
  return (
    <Card>
      <CardHeader title={title} />
      <CardContent>
        <Grid container spacing={2}>
          {data.map((d, index) => (
            <Grid item xs={12} key={index}>
              <Stack direction={"row"} alignItems="center" spacing={3}>
                <RouteButton path={`${d.id}`} msg={"查看"} variant="text" />
                <Avatar src={d.student.avatar} />
                <Typography>{d.student.classes.name}</Typography>
                <Typography>
                  {d.student.firstname}
                  {"  "}
                  {d.student.lastname}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
