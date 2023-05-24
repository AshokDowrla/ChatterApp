import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import { Stack } from "@mui/material";

const DashboardLayout = () => {
  return (
    <>
      <Stack direction="row">
        <SideNav />
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
