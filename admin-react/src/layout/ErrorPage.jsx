import { Box, Button, Card, CardContent, CardHeader } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CenterBox from "./CenterBox";

export default function ErrorPage() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.login.username);
  const handleBack = () => {
    navigate(`/${username}`, { replace: true });
  };
  return (
    <CenterBox>
      <Card
        sx={{
          background: "linear-gradient(-125deg,#212121 30rem,white 30rem)",
        }}
      >
        <CardHeader
          sx={{ color: "white" }}
          title="页面找不到了"
          subheaderTypographyProps={{ color: "white" }}
          subheader="返回主页试试"
        />
        <CardContent>
          <Box p={10} pl={20} pr={20} color="white">
            <Button onClick={handleBack} variant="contained">
              返回主页
            </Button>
          </Box>
        </CardContent>
      </Card>
    </CenterBox>
  );
}
