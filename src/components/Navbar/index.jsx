import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  Logo,
  Ul,
  activeStyle,
  LinkWrap,
  IconWrap,
  NavWrap,
  MediaWrap,
  Button,
  Login,
  langIcon,
} from "./style";
import logo from "../../assets/images/logo.jpg";
import uz from "../../assets/icons/uzbekistan.png";
import en from "../../assets/icons/united-kingdom.png";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { data } from "../../utilits/navbar";

const Navbar = () => {
  const [state, setState] = useState(false);
  const [age, setAge] = React.useState("uz");

  const { i18n, t } = useTranslation();

  const handleChange = (event) => {
    setAge(event.target.value);
    changeLanguage(event.target.value);
  };

  const changeLanguage = (lan) => {
    i18n.changeLanguage(lan);
  };

  return (
    <>
      <NavWrap className="container">
        <LinkWrap>
          <NavLink to="/">
            <Logo src={logo}></Logo>
          </NavLink>
          <MediaWrap media={!state ? "false" : undefined}>
            <div onClick={() => setState(!state)} className="closeIcon">
              <CloseIcon />
            </div>
            <Ul>
              {data.map(
                (i) =>
                  !i.private && (
                    <a key={i.id} href={`#${i?.path}`}>
                      {t(`${i.title}`)}
                    </a>
                  )
              )}
              <NavLink to="/login" style={activeStyle}>
                <Button className="closeIcon"> {t("login")}</Button>
              </NavLink>
            </Ul>
          </MediaWrap>
        </LinkWrap>
        <IconWrap>
          <Login>
            <NavLink to="/login" style={activeStyle}>
              {t("login")}
            </NavLink>
          </Login>

          <Button media="true" desctop="false" onClick={() => setState(!state)}>
            <MenuIcon />
          </Button>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 60 }}>
            <Select value={age} onChange={handleChange} defaultValue="en">
              <MenuItem value="en" sx={langIcon}>
                <img
                  src={en}
                  alt="langen"
                  style={{ width: "20px" }}
                  srcSet={`${en} 2x`}
                  loading="lazy"
                />
                en
              </MenuItem>
              <MenuItem value="uz" sx={langIcon}>
                <img
                  src={uz}
                  alt="languz"
                  style={{ width: "20px" }}
                  srcSet={`${uz} 2x`}
                  loading="lazy"
                />
                uz
              </MenuItem>
            </Select>
          </FormControl>
        </IconWrap>
      </NavWrap>
      <Outlet />
    </>
  );
};

export default Navbar;
