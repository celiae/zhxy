import { SiGoogleclassroom, SiHomebridge } from "react-icons/si";
import { BsTable } from "react-icons/bs";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaRegChartBar,
} from "react-icons/fa";
import { ImLab } from "react-icons/im";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import * as ROUTE from "../constant/routes";

const getAllNav = (user) => {
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
      name: "统计",
      href: `/${user.username}${ROUTE.CHART}`,
      icon: <FaRegChartBar />,
    },
  ];
  return nav;
};
export default getAllNav;
