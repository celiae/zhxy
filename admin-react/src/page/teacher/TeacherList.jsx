import React from "react";
import { Avatar, IconButton } from "@mui/material";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { teacherDeleteAll, teacherList } from "../../api/teacher";
import { useSelector } from "react-redux";
import CusDataGrid from "../../components/table/CusDataGrid";
function getFullName(params) {
  return `${params.row.firstname || ""} ${params.row.lastname || ""}`;
}
function getAvatarId(params) {
  return { avatar: params.row.avatar, id: params.row.id };
}
export default function TeacherList() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.login.username);
  const { data, status } = useQuery("teacherList", teacherList);
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    setRows(data);
  }, [data]);
  const handleDeleteAll = () => {
    teacherDeleteAll();
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
            navigate(`/${username}/teacher/${params.value.id}`);
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
