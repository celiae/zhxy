import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React from "react";
import { FaAccusoft, FaReact } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BasicPopover from "../components/pop/BasicPopover";
import { setActive } from "../store/navSlice";

export default function Sidebar({ allNav }) {
  const active = useSelector((state) => state.nav.active);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Box>
      <Toolbar>
        <IconButton color="inherit">
          <FaAccusoft />
        </IconButton>
        <BasicPopover buttonMsg={"智慧校园"} msg={"智慧校园运维管理系统"} />
        <IconButton color="inherit">
          <FaReact className={"animate-spin delay-75"} />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {allNav.map((nav, index) => (
          <Box key={index}>
            <ListItem
              sx={
                active === index
                  ? { background: "#1e88e5", color: "white" }
                  : {}
              }
              disablePadding
            >
              <ListItemButton
                onClick={() => {
                  navigate(nav.href);
                  dispatch(setActive(index));
                }}
              >
                <ListItemIcon>{nav.icon}</ListItemIcon>
                <ListItemText primary={nav.name} />
              </ListItemButton>
            </ListItem>
          </Box>
        ))}
      </List>
    </Box>
  );
}
