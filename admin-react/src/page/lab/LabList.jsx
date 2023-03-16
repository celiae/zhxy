import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useQuery } from "react-query";
import Loading from "../../components/progress/Loading";
import { labList } from "../../api/lab";
import LabTable from "./LabTable";
import RouteButton from "../../components/button/RouteButton";

export default function LabList() {
  const { data, status } = useQuery("labList", labList);
  const [rows, setRows] = useState(data);
  useEffect(() => {
    setRows(data);
  }, [data]);
  if (status === "loading") return <Loading />;
  return (
    <Box>
      <LabTable data={rows} setData={setRows} />
    </Box>
  );
}
