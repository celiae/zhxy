import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import { studentNumber } from "../../server/student";
import { teacherEntryDate, teacherNumber } from "../../server/teacher";
import { Grid, Typography } from "@mui/material";
import { labNumber } from "../../server/lab";
import { departmentNumber } from "../../server/department";
import HomeData from "../../components/card/HomeData";
import SimpleArea from "../../components/chart/SimpleArea";
export default function Home() {
  const studentNum = useQuery("studentNumber", studentNumber);
  const teacherNum = useQuery("teacherNumber", teacherNumber);
  const teacherEntry = useQuery("teacherEntryDate", teacherEntryDate);
  const labNum = useQuery("labNumber", labNumber);
  const departmentNum = useQuery("departmentNumber", departmentNumber);
  const chartData = (firstname, lastname, entry, salary, reward) => {
    return {
      name: firstname + " " + lastname,
      entryDate: entry,
      salary: salary,
      reward: reward,
    };
  };
  const teacherEntryChart = [];

  if (studentNum.status === "loading" || teacherNum.status === "loading")
    return <Loading />;
  teacherEntry.data.forEach((element) => {
    teacherEntryChart.push(
      chartData(element[0], element[1], element[2], element[3], element[4])
    );
  });
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <HomeData>
          <Typography color={"secondary"} variant="body1">
            学生总数
          </Typography>
          <Typography variant="h1">{studentNum.data}</Typography>
        </HomeData>
      </Grid>
      <Grid item xs={3}>
        <HomeData>
          <Typography color={"secondary"} variant="body1">
            部门总数
          </Typography>
          <Typography variant="h1">{departmentNum.data}</Typography>
        </HomeData>
      </Grid>
      <Grid item xs={3}>
        <HomeData>
          <Typography color={"secondary.dark"} variant="body1">
            拥有座实验室
          </Typography>
          <Typography variant="h1">{labNum.data}</Typography>
        </HomeData>
      </Grid>
      <Grid item xs={3}>
        <HomeData>
          <Typography color={"secondary.dark"} variant="body1">
            教师在职数
          </Typography>
          <Typography variant="h1">{teacherNum.data}</Typography>
        </HomeData>
      </Grid>
      <Grid item xs={12}>
        <Typography color={"secondary.dark"} variant="body1">
          教师入职时薪资与奖金
        </Typography>
        <SimpleArea data={teacherEntryChart} />
      </Grid>
    </Grid>
  );
}
