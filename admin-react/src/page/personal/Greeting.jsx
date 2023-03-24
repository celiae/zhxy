import React from "react";
import { Avatar, Button, CardContent, Stack, Typography } from "@mui/material";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

export default function Greeting({ loginInfo }) {
  const [avatar, setAvatar] = React.useState(loginInfo.avatar);
  const updateImageDisplay = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <CardContent>
      <Stack direction={"row"} spacing={4} mb={3}>
        <Avatar src={avatar} />
        <Button component="label">
          <input onChange={updateImageDisplay} hidden type="file" />
          更换头像
        </Button>
        <Typography fontSize={"larger"}>{loginInfo.lastLogin}</Typography>
      </Stack>
      <Stack spacing={2} direction="row">
        <Typography variant="h6">管理员</Typography>
        <Typography variant="h5" color="primary">
          {loginInfo.username}
        </Typography>
        <Typography variant="h5">下午好</Typography>
        <Typography variant="h5">
          <EmojiPeopleIcon color="secondary" fontSize="large" />
        </Typography>
      </Stack>
      <Stack spacing={2} direction="row">
        <Typography variant="h6">您已在线</Typography>
        <Typography variant="h5" color="warning">
          17
        </Typography>
        <Typography variant="h6">小时</Typography>
      </Stack>
    </CardContent>
  );
}
