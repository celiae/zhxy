import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import ScoreTable from "./ScoreTable";
import { scoreList } from "../../server/score";
import RouteButton from "../../components/button/RouteButton";

export default function ScoreList() {
  const { data, status } = useQuery("scoreList", scoreList);
  const [rows, setRows] = useState(data);
  useEffect(() => {
    setRows(data);
  }, [data]);
  if (status === "loading") return <Loading />;
  return (
    <Box>
      <ScoreTable data={rows} setData={setRows} />
      <RouteButton color={"secondary"} msg="添加" path={"create"} />
    </Box>
  );
}
