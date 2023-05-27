import React from "react";
import { Avatar } from "@mui/material";
import { faker } from "@faker-js/faker";

const ProfileMenu = () => {
  return (
    <>
      <Avatar
        id="profile-positioned-button"
        src={faker.image.avatar()}
      ></Avatar>
    </>
  );
};

export default ProfileMenu;
