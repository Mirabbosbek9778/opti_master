import { NavLink, useNavigate } from "react-router-dom";
import { Wrap, Controllers, Border, langIcon, IconWrap } from "./style";
import avatar from "../../../assets/images/avatar1.png";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/Auth";
import logo from "../../../assets/images/logo.jpg";
import { useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import uz from "../../../assets/icons/uzbekistan.png";
import en from "../../../assets/icons/united-kingdom.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { data } from "../../../utilits/navbar";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [age, setAge] = React.useState("uz");

  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const [, dispatch] = useContext(AuthContext);
  const handleLogOut = () => {
    dispatch({ type: "logout" });
    navigate("/login");
  };

  const handleChange = (event) => {
    setAge(event?.target?.value);
    changeLanguage(event?.target?.value);
  };

  const changeLanguage = (lan) => {
    i18n.changeLanguage(lan);
  };
  return (
    <Border>
      <Wrap className="container">
        <Wrap.Logo src={logo} onClick={() => navigate("/")} />
        <Wrap.Links mediaOpen={openMenu ? 1 : 0}>
          <IconWrap>
            <CloseIcon onClick={() => setOpenMenu(!openMenu)} />
          </IconWrap>
          {data.map(
            (i) =>
              !i.private && (
                <NavLink key={i?.id} href={`#${i?.path}`}>
                  <Wrap.Link> {t(`${i?.title}`)}</Wrap.Link>
                </NavLink>
              )
          )}
        </Wrap.Links>
        <Controllers>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 60 }}>
            <Select value={age} onChange={handleChange} defaultValue="en">
              <MenuItem value="en" sx={langIcon}>
                <img
                  src={en}
                  alt="langen"
                  style={{ width: "20px" }}
                  srcSet={`${en} 2x`}
                  loading="lazy"
                />{" "}
                en
              </MenuItem>
              <MenuItem value="uz" sx={langIcon}>
                <img
                  src={uz}
                  alt="languz"
                  style={{ width: "20px" }}
                  srcSet={`${uz} 2x`}
                  loading="lazy"
                />{" "}
                uz
              </MenuItem>
              <MenuItem value="ru" sx="">
                <img
                  // src={uz}
                  alt="languz"
                  style={{ width: "50px" }}
                  srcSet={`${uz} 2x`}
                  loading="lazy"
                />{" "}
                R{console.log("RU")}
              </MenuItem>
            </Select>
          </FormControl>
          <Controllers.Lang src={avatar} onClick={handleLogOut} />
          <IconWrap>
            <MenuIcon onClick={() => setOpenMenu(!openMenu)} />
          </IconWrap>
        </Controllers>
      </Wrap>
    </Border>
  );
};

export default Navbar;
