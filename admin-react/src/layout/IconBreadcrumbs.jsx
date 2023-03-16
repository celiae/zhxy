import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

/**
 *
 * @param item.name
 * @param item.href
 * @returns
 */

export default function IconBreadcrumbs() {
  const navigate = useNavigate();
  const array = useSelector((state) => state.nav.array);
  function isLast(index) {
    return index === array.length - 1;
  }
  if (!array) {
    return;
  }
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb" color="text.light">
        {array.map((i, index) => {
          if (isLast(index)) {
            return (
              <Typography
                key={index}
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
              >
                <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                {i.name}
              </Typography>
            );
          } else {
            return (
              <Link
                onClick={() => {
                  navigate(i.href);
                }}
                key={index}
                underline="hover"
                sx={{ display: "flex", alignItems: "center" }}
                color="inherit"
                href={i.href}
              >
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                {i.name}
              </Link>
            );
          }
        })}
      </Breadcrumbs>
    </div>
  );
}
