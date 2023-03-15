import { Card, CardContent, Stack } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import RouteButton from "./RouteButton";
import SubmitButton from "./SubmitButton";

export default function RSButton({ submitData, handleSubmit }) {
  const navigate = useNavigate();
  return (
    <Card>
      <CardContent>
        <Stack direction={"row"} spacing={3}>
          <RouteButton path={-1} msg="返回" />
          <SubmitButton
            event={() => {
              handleSubmit(submitData);
              navigate(-1, { replace: true });
            }}
            msg="提交"
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
