import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import { studentNumber } from "../../api/student";
import { teacherNumber } from "../../api/teacher";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { labNumber } from "../../api/lab";
import { departmentNumber } from "../../api/department";
import TitleValue from "../../components/box/TitleValue";
import { apartmentNumber } from "../../api/apartment";
import { classroomNumber } from "../../api/classroom";
export default function ItemNumber() {
  const studentNum = useQuery("studentNumber", studentNumber);
  const teacherNum = useQuery("teacherNumber", teacherNumber);
  const labNum = useQuery("labNumber", labNumber);
  const departmentNum = useQuery("departmentNumber", departmentNumber);
  const apartmentNum = useQuery("apartmentNumber", apartmentNumber);
  const classroomNum = useQuery("classroomNumber", classroomNumber);
  if (classroomNum.status === "loading") return <Loading />;
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={12} md={8} lg={6}>
            <TitleValue title={"学生总数"} value={studentNum.data} />
          </Grid>
          <Grid item xs={12} md={8} lg={6}>
            <TitleValue title={"部门总数"} value={departmentNum.data} />
          </Grid>
          <Grid item xs={12} md={8} lg={6}>
            <TitleValue title={"拥有座实验室"} value={labNum.data} />
          </Grid>
          <Grid item xs={12} md={8} lg={6}>
            <TitleValue title={"教师在职数"} value={teacherNum.data} />
          </Grid>
          <Grid item xs={12} md={8} lg={6}>
            <TitleValue title={"公寓数量"} value={apartmentNum.data} />
          </Grid>
          <Grid item xs={12} md={8} lg={6}>
            <TitleValue title={"教室数量"} value={classroomNum.data} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
