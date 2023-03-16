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
  Badge,
  Stack,
  Avatar,
} from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import { selectLoginInfo } from "../store/loginSlice";
import HideOnScroll from "./HideOnScoll";
import getAllNav from "./nav";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EmailIcon from "@mui/icons-material/Email";
import TranslateIcon from "@mui/icons-material/Translate";
import Sidebar from "./Sidebar";
import IconPopover from "../components/pop/IconPopover";
import SearchDialog from "./SearchDialog";
const settings = ["个人中心", "退出登录"];
const translation = ["中文", "English"];
const noticification = ["中文", "English"];
const mail = ["中文", "English"];
const drawerWidth = 240;
function ResponsiveDrawer(props) {
  const { window, children } = props;
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
              </Grid>
              <Grid item>
                <Stack direction={"row"} alignItems="center" spacing={1}>
                  <SearchDialog />
                  <IconPopover
                    title="邮箱"
                    icon={
                      <Badge badgeContent={7} color="error">
                        <EmailIcon />
                      </Badge>
                    }
                    menu={mail}
                  />
                  <IconPopover
                    title="通知"
                    icon={
                      <Badge badgeContent={17} color="error">
                        <NotificationsActiveIcon />
                      </Badge>
                    }
                    menu={noticification}
                  />
                  <IconPopover
                    title="切换语言"
                    icon={<TranslateIcon />}
                    menu={translation}
                  />
                  <IconPopover
                    title="打开设置"
                    icon={<Avatar alt="Remy Sharp" />}
                    menu={settings}
                  />
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
