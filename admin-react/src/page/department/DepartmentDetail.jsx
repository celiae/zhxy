import {
  Stack,
  Button,
  Grid,
  Link,
  Typography,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Box,
} from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { departmentDelete, departmentDetail } from "../../api/department";
import {
  departmentFinanceDelete,
  getByDepartmentId,
} from "../../api/departmentfinance";
import DeleteIcon from "@mui/icons-material/Delete";
import RouteButton from "../../components/button/RouteButton";
import ChartArea from "../../components/chart/ChartArea";
export default function DepartmentDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { data, status } = useQuery(["departmentDetail", id], () =>
    departmentDetail(id)
  );
  const department_finance = useQuery(["getByDepartmentId", id], () =>
    getByDepartmentId(id)
  );
  const handleClick = () => {
    navigate("update");
  };
  const handleDelete = () => {
    departmentDelete(id);
    handleBack();
  };
  const updateFinance = (id) => {
    navigate(`finance/${id}`);
  };
  const deleteFinance = (id) => {
    department_finance.data.filter((d) => d.id != id);
    departmentFinanceDelete(id);
  };
  const handleBack = () => {
    navigate(-1);
  };
  const gotoDepartment = (departmentId) => {
    const departmentPath = location.pathname.split("/").slice(0, -1).join("/");
    navigate(`${departmentPath}/${departmentId}`);
  };
  if (status === "loading" || department_finance.status === "loading")
    return <Loading />;
  department_finance.data.sort((a, b) => new Date(a.date) - new Date(b.date));
  console.log(department_finance.data);
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
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
              <Grid item xs={12} md={6}>
                <Stack direction={"row"} spacing={1}>
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
              <Grid item xs={12}>
                <Typography variant="caption">部门描述</Typography>
                <Typography variant="h6">{data.description}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title="财务" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <RouteButton path={"finance"} msg={"添加"} />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ overflow: "auto" }}>
                  <ChartArea
                    data={department_finance.data.sort(
                      (a, b) => a.date < b.date
                    )}
                    XdataKey={"date"}
                    dataKey={["budget", "cost"]}
                  />
                </Box>
              </Grid>
              {department_finance.data.map((d, index) => (
                <Grid item xs={12} key={index}>
                  <Card>
                    <CardHeader subheader={d.date} />
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid item>
                          <Stack>
                            <Typography variant="caption">部门预算</Typography>
                            <Typography variant="">{d.budget}</Typography>
                          </Stack>
                        </Grid>
                        <Grid item>
                          <Stack>
                            <Typography variant="caption">部门消耗</Typography>
                            <Typography variant="">{d.cost}</Typography>
                          </Stack>
                        </Grid>
                        <Grid item>
                          <IconButton
                            onClick={() => {
                              updateFinance(d.id);
                            }}
                            color="warning"
                          >
                            <BorderColorIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => {
                              deleteFinance(d.id);
                            }}
                            color="error"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography variant="">{d.description}</Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
