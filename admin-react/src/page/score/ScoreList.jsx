import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import { scoreList } from "../../api/score";
import CusDataGrid from "../../components/table/CusDataGrid";

export default function ScoreList() {
  const { data, status } = useQuery("scoreList", scoreList);
  const [rows, setRows] = useState(data);
  useEffect(() => {
    setRows(data);
  }, [data]);
  if (status === "loading") return <Loading />;
  return (
    <CusDataGrid
      columns={columns}
      rows={rows}
      handleDeleteAll={handleDeleteAll}
    />
  );
}
