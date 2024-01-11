import React from "react";
import { Trans, useTranslation } from "react-i18next";

import { Title, Text, Wrap, TextWrap } from "./style";

const Header = () => {
  const { t } = useTranslation();
  return (
    <Wrap className="wrap">
      <TextWrap>
        <Trans>
          <Title className="display-1">{t("headerTitle")}</Title>
        </Trans>
        <Text className="desc">{t("headerText")}</Text>
        <button className="btn">{t("btnCourses")}</button>
      </TextWrap>
    </Wrap>
  );
};

export default Header;
