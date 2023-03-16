import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Grid,
  Stack,
  Tooltip,
} from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { selectLoginInfo } from "../store/loginSlice";
import HideOnScroll from "./HideOnScoll";
import getAllNav from "./nav";
import Sidebar from "./Sidebar";
import SearchDialog from "./SearchDialog";
import BarAvatar from "./BarAvatar";
import BarTrans from "./BarTrans";
import BarNotice from "./BarNotice";
import BarMail from "./BarMail";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
const drawerWidth = 240;
function ResponsiveDrawer(props) {
  const { window, children } = props;
  const navigate = useNavigate();
  const user = useSelector(selectLoginInfo);
  const allNav = getAllNav(user);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <GiHamburgerMenu />
                </IconButton>
                <Tooltip title="返回">
                  <IconButton
                    color="inherit"
                    onClick={() => {
                      navigate(-1);
                    }}
                  >
                    <ArrowBackIosNewIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item>
                <Stack direction={"row"} alignItems="center" spacing={1}>
                  <SearchDialog />
                  <BarMail />
                  <BarNotice />
                  <BarTrans />
                  <BarAvatar />
                </Stack>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Sidebar allNav={allNav} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <Sidebar allNav={allNav} />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
  children: PropTypes.node,
};

export default ResponsiveDrawer;
