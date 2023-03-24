import React from "react";
import { useQuery } from "react-query";
import { scoreDeleteAll, scoreList } from "../../api/score";
import CusDataGrid from "../../components/datagrid/CusDataGrid";
function getFullname(params) {
  return params.row.student.firstname + " " + params.row.student.lastname;
}
function getLessonName(params) {
  return params.row.lesson.name;
}
export default function ScoreList() {
  const { data, status } = useQuery("scoreList", scoreList);
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    setRows(data);
  }, [data]);
  const handleDeleteAll = () => {
    scoreDeleteAll();
    setRows([]);
  };
  const columns = [
    {
      field: "fullname",
      headerName: "学生名",
      width: 150,
      valueGetter: getFullname,
    },
    {
      field: "lesson",
      headerName: "科目",
      width: 150,
      valueGetter: getLessonName,
    },
    {
      field: "score",
      headerName: "分数",
      width: 150,
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
