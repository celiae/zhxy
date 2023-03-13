import { Button, CircularProgress, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CenterBox from "../../layout/CenterBox";

export default function Loading() {
  const navigate = useNavigate();
  const [show, setShow] = React.useState(false);
  const handleBack = () => {
    navigate(-1);
  };
  React.useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 3000);
  });
  return (
    <CenterBox>
      <Stack spacing={3} alignItems="center">
        <CircularProgress color="inherit" />
        {show && (
          <Button onClick={handleBack} variant="contained">
            阿欧卡了，先返回吧
          </Button>
        )}
      </Stack>
    </CenterBox>
  );
}
