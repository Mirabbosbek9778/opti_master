import React from "react";
import { BoxWrap, Container, Partner, Text, TextBig, Wrap } from "./style";

import sponsor1 from "../../../assets/images/sponsor1.jpg";
import sponsor2 from "../../../assets/images/sponsor2.jpg";

import { useTranslation } from "react-i18next";

const Record = () => {
  const { t } = useTranslation();

  const language = t("record", { returnObjects: true });

  return (
    <Wrap className="wrap">
      <Container className="container">
        <Text>{t("whyUs")}</Text>
        <TextBig className="h2">{language?.title}</TextBig>
        <Text>{language?.text}</Text>
        <BoxWrap>
          {language?.status?.map((item) => (
            <div>
              <TextBig className="h3">{item.num}</TextBig>
              <Text>{item.text}</Text>
            </div>
          ))}
        </BoxWrap>
        <TextBig className="h3">{language?.h2}</TextBig>
        <Partner>
          <div>
            <img src={sponsor1} alt="theGuardian" />
          </div>
          <div>
            <img src={sponsor2} alt="partner" />
          </div>
         
        </Partner>
      </Container>
    </Wrap>
  );
};

export default Record;
