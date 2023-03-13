import React, { useEffect, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/progress/Loading";
import LessonTable from "../../components/table/LessonTable";
import { lessonList } from "../../server/lesson";
export default function LessonList() {
  const { data, status } = useQuery("lessonList", lessonList);
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
      <Grid container>
        <Grid item xs={12}>
          <LessonTable data={rows} setData={setRows} />
        </Grid>
        <Grid item>
          <Button color="secondary" variant="contained" onClick={handleClick}>
            添加
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
