import React from "react";
import { Avatar, IconButton } from "@mui/material";
import { useQuery } from "react-query";
import { studentList } from "../../api/student";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { studentDeleteAll } from "../../api/student";
import CusDataGrid from "../../components/table/CusDataGrid";
function getFullName(params) {
  return `${params.row.firstname || ""} ${params.row.lastname || ""}`;
}
function getclassesName(params) {
  return `${params.row.classes.name}`;
}
function getAvatarId(params) {
  return { avatar: params.row.avatar, id: params.row.id };
}
export default function StudentList() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.login.username);
  const { data, status } = useQuery("studentList", studentList);
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    setRows(data);
  }, [data]);
  const handleDeleteAll = () => {
    studentDeleteAll();
    setRows([]);
  };
  const columns = [
    {
      field: "avatar",
      headerName: "头像",
      width: 70,
      valueGetter: getAvatarId,
      renderCell: (params) => (
        <IconButton
          onClick={() => {
            navigate(`/${username}/student/${params.value.id}`);
          }}
        >
          <Avatar src={params.value.avatar} />
        </IconButton>
      ),
    },
    {
      field: "fullname",
      headerName: "姓名",
      width: 150,
      valueGetter: getFullName,
    },
    {
      field: "classes",
      headerName: "班级",
      width: 150,
      valueGetter: getclassesName,
    },
    {
      field: "lastLogin",
      headerName: "最近登录",
      width: 200,
    },
  ];
  return (
    <CusDataGrid
      columns={columns}
      rows={rows}
      handleDeleteAll={handleDeleteAll}
    />
  );
}
