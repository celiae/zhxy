import React, { useEffect, useState } from "react";
import { Box, Button, Card, CardContent } from "@mui/material";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import ScoreTable from "../../components/table/ScoreTable";
import { scoreList } from "../../server/score";

export default function ScoreList() {
  const { data, status } = useQuery("scoreList", scoreList);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("create");
  };
  const handleBack = () => {
    navigate(-1);
  };
  const [rows, setRows] = useState(data);
  useEffect(() => {
    setRows(data);
  }, [data]);
  if (status === "loading") return <Loading />;
  return (
    <Card>
      <CardContent>
        <Button onClick={handleBack} variant="contained">
          返回学生信息表
        </Button>
        <ScoreTable data={rows} setData={setRows} />
        <Button onClick={handleClick} variant="outlined">
          添加
        </Button>
      </CardContent>
    </Card>
  );
}
