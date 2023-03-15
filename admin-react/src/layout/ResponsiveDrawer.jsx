import * as React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { SiGoogleclassroom, SiHomebridge } from "react-icons/si";
import { BsTable, BsPersonCircle } from "react-icons/bs";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaAccusoft,
  FaReact,
  FaRegChartBar,
} from "react-icons/fa";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImLab } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as ROUTE from "../constant/routes";
import { selectLoginInfo } from "../store/loginSlice";
import { setActive } from "../store/navSlice";
import HideOnScroll from "./HideOnScoll";

const drawerWidth = 240;

const title = "智慧校园运维管理系统";

function ResponsiveDrawer(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();
  const active = useSelector((state) => state.nav.active);
  const dispatch = useDispatch();
  const user = useSelector(selectLoginInfo);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const nav = [
    { name: "首页", href: `/${user.username}`, icon: <SiHomebridge /> },
    {
      name: "学生",
      href: `/${user.username}${ROUTE.STUDENT}`,
      icon: <FaUserGraduate />,
    },
    {
      name: "教师",
      href: `/${user.username}${ROUTE.TEACHER}`,
      icon: <FaChalkboardTeacher />,
    },
    {
      name: "班级",
      href: `/${user.username}${ROUTE.CLASSES}`,
      icon: <SiGoogleclassroom />,
    },
    {
      name: "课程",
      href: `/${user.username}${ROUTE.LESSON}`,
      icon: <BsTable />,
    },
    {
      name: "实验室",
      href: `/${user.username}${ROUTE.LAB}`,
      icon: <ImLab />,
    },
    {
      name: "部门",
      href: `/${user.username}${ROUTE.DEPARTMENT}`,
      icon: <LocationCityIcon />,
    },
    {
      name: "数据可视化",
      href: `/${user.username}${ROUTE.CHART}`,
      icon: <FaRegChartBar />,
    },
    {
      name: "个人中心",
      href: `/${user.username}${ROUTE.PERSONAL}`,
      icon: <BsPersonCircle />,
    },
  ];
  const drawer = (
    <Box>
      <Toolbar />
      <Divider />
      <List>
        {nav.map((nav, index) => (
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
            bgcolor: "#212121",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <GiHamburgerMenu />
            </IconButton>
            <IconButton color="inherit">
              <FaAccusoft />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {title}
            </Typography>
            <IconButton color="inherit">
              <FaReact className={"animate-spin delay-75"} />
            </IconButton>
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
          {drawer}
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
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
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
