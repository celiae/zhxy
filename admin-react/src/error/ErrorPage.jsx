import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CenterBox from "../components/box/CenterBox";

export default function ErrorPage() {
  const navigate = useNavigate();
  const username = useSelector((state) => state.login.username);
  const handleBack = () => {
    navigate(`/${username}`, { replace: true });
  };
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <CenterBox>
      <Card
        sx={{
          background: "#212121",
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
            <ButtonGroup>
              <Button onClick={handleBack} variant="contained">
                返回主页
              </Button>
              <Button onClick={handleReload} variant="contained">
                刷新页面
              </Button>
            </ButtonGroup>
          </Box>
        </CardContent>
      </Card>
    </CenterBox>
  );
}
