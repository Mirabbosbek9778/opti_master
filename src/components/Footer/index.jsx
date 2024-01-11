import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

import logo from "../../assets/images/logo.jpg";
import {
  Col,
  FooterMenuHeading,
  FooterMenuList,
  Section1,
  Section2,
  Text,
} from "./style";

const Footer = () => {
  const [state] = useState(0);

  const { t } = useTranslation();
  const footerData = [
    {
      id: 1,
      title: t("course"),
      list: [
        `ACCA  ${t("course")}`,
        `CIMA  ${t("course")}`,
        `AAT  ${t("course")}`,
        `FRM  ${t("course")}`,
        `FIA  ${t("course")}`,
      ],
      open: state,
    },
    {
      id: 2,
      title:  `${t("development")}`,
      list: [`CDP  ${t("course")} `],
      open: state,
    },
    {
      id: 3,
      title: `${t('company')}`,
      list: ["Blog", `${t("policy")}`, `${t("terms")}`],
      open: state,
    },
    {
      id: 4,
      title:  `${t("support")}`,
      list: [ `${t("faq")}`,  `${t("contact")}`],
      open: state,
    },
  ];
  const [data, setData] = useState(footerData);

  function openMenu(id) {
    const newData = data.map((v) => {
      if (v.id === id) {
        v.open = !v.open;
      }
      return v;
    });
    setData(newData);
  }

  return (
    <div style={{background:"white"}}>
      <Section1 className="container">
        {data?.map((item) => (
          <Col key={item?.id}>
            <FooterMenuHeading
              onClick={() => openMenu(item?.id)}
              media={!item?.open ? 1 : 0}
            >
              {item.title}
              <KeyboardArrowUpIcon
                sx={{ transform: `rotate(${item.open ? "0" : "180deg"})` }}
              />
            </FooterMenuHeading>
            <FooterMenuList media={!item?.open ? 1 : 0}>
              {item?.list?.map((value, index) => (
                <li key={index}>
                  <NavLink to="/"> {value} </NavLink>
                </li>
              ))}
            </FooterMenuList>
          </Col>
        ))}
        <Col>
          <FooterMenuHeading imgLogo>
            <img src={logo} alt="logo" className="logo"/>
          </FooterMenuHeading>
          <FooterMenuList link>
            <li>
              <NavLink to="youtube">
                <YouTubeIcon /> <span> YouTube</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="linkedIn">
                <LinkedInIcon />
                <span> LinkedIn</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="instagram">
                <InstagramIcon />
                <span> Instagram </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="twitter">
                <TwitterIcon />
                <span> Twitter </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="facebook">
                <FacebookIcon />
                <span> Facebook </span>
              </NavLink>
            </li>
          </FooterMenuList>
        </Col>
      </Section1>
      <Section2 className="container">
        <Text grey>© Signal Education Limited, 2023</Text>
        <Text line>Update your advertising tracking preferences</Text>
      </Section2>
    </div>
  );
};

export default Footer;
