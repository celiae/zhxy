import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import LessonTable from "./LessonTable";
import { lessonList } from "../../api/lesson";
import RouteButton from "../../components/button/RouteButton";
export default function LessonList() {
  const { data, status } = useQuery("lessonList", lessonList);
  const [rows, setRows] = useState(data);
  useEffect(() => {
    setRows(data);
  }, [data]);
  if (status === "loading") return <Loading />;
  return (
    <Box>
      <LessonTable data={rows} setData={setRows} />
      <RouteButton color={"secondary"} msg="添加" path={"create"} />
    </Box>
  );
}
