import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import ClassesTable from "../../components/table/ClassesTable";
import { classesList, studentNumInclasses } from "../../server/classes";

export default function ClassesList() {
  const { data, status } = useQuery("classesList", classesList);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("create");
  };
  const [rows, setRows] = useState(data);
  useEffect(() => {
    setRows(data);
  }, [data]);
  if (status === "loading") return <Loading />;
  return (
    <Box>
      <ClassesTable data={rows} setData={setRows} />
      <Button onClick={handleClick} variant="contained" color="secondary">
        添加
      </Button>
    </Box>
  );
}
