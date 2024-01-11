import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Wrap, ImgWrap, TextWrap, Button } from "./style";

const Header = ({ data }) => {
  const { t } = useTranslation();

  const BAE_URL = process.env.REACT_APP_BASE_URL;

  return (
    <div className="container" id="header">
      <Wrap>
        <TextWrap>
          <h1 className="display-1">{data?.sub_title}</h1>
          <h2 className="desc">{data?.title}</h2>
          <p className="text">{data?.text}</p>
          <Button>
            <Link to={"/"}>{t("start")}</Link>
          </Button>
        </TextWrap>
        <ImgWrap>
          <img src={`${BAE_URL}${data?.image}`} alt="" />
        </ImgWrap>
      </Wrap>
    </div>
  );
};

export default Header;
