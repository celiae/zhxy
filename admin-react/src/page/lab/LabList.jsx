import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import { labList } from "../../server/lab";
import LabTable from "../../components/table/LabTable";

export default function LabList() {
  const { data, status } = useQuery("labList", labList);
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
      <LabTable data={rows} setData={setRows} />
      <Button onClick={handleClick} variant="contained" color="secondary">添加</Button>
    </Box>
  );
}
