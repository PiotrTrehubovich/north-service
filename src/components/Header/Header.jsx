// import React from "react";
import { Menu } from "@mui/material";
import logo from "../../assets/img/North_S_5.png";
// import stripes from "../../assets/img/stripes.png";
import { CustomHeader, CustomContainer } from "./styles";
import { Image } from "@mui/icons-material";

const Header = () => {
  return (
    <CustomContainer
      sx={{
        padding: {
          lg: "0 10px",
          md: "0 20px",
        },
      }}
    >
      <CustomHeader>
        <Image src={logo} alt="logo" sx={{ maxHeight: "56px" }} />
      </CustomHeader>
    </CustomContainer>
  );
};

export default Header;
