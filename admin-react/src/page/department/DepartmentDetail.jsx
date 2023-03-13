import {
  Stack,
  Button,
  Grid,
  Link,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { departmentDelete, departmentDetail } from "../../server/department";
export default function DepartmentDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { data, status } = useQuery(["departmentDetail", id], () =>
    departmentDetail(id)
  );
  const handleClick = () => {
    navigate("update");
  };
  const handleDelete = () => {
    departmentDelete(id);
    handleBack();
  };
  const handleBack = () => {
    navigate(-1);
  };
  const gotoDepartment = (departmentId) => {
    const departmentPath = location.pathname.split("/").slice(0, -1).join("/");
    navigate(`${departmentPath}/${departmentId}`);
  };
  if (status === "loading") return <Loading />;
  return (
    <Card>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="h4">{data.name}</Typography>
            {data.department && (
              <Typography variant="caption">
                隶属于
                <Link
                  href="#"
                  onClick={() => {
                    gotoDepartment(data.department.id);
                  }}
                >
                  {data.department.name}
                </Link>
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Stack direction={"row"} spacing={1}>
              <Button onClick={handleBack} variant="outlined">
                返回
              </Button>
              <Button onClick={handleClick} variant="outlined">
                <BorderColorIcon />
                更改
              </Button>
              <Button onClick={handleDelete} color="error">
                删除
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="caption">创建时间</Typography>
            <Typography variant="h6">{data.createTime}</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="caption">修改时间</Typography>
            <Typography variant="h6">{data.modifyTime}</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="caption">负责人</Typography>
            <Typography variant="h6">{data.manager}</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="caption">部门预算</Typography>
            <Typography variant="h6">{data.budget}</Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <Typography variant="caption">部门描述</Typography>
            <Typography variant="h6">{data.description}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
