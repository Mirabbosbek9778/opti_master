import React from "react";
import { useTranslation } from "react-i18next";

import {
  Wrap,
  Content,
  TextWrap,
  GridCol,
  Study,
  OverviewText,
  Card,
  CardWrap,
  Average,
  Grid,
  Box,
} from "./style";

import yellow from "../../../../../assets/icons/yellow-monitor.png";
import support from "../../../../../assets/icons/blue-monitor.png";
import plan from "../../../../../assets/icons/green-mentorship.png";
import question from "../../../../../assets/icons/red-revision.png";

const Overview = ({name}) => {
  const { t } = useTranslation();
  const language = t("overview", { returnObjects: true, abbr: name });

  const studyImage = [
    {
      id: 1,
      img: yellow,
    },
    {
      id: 2,
      img: support,
    },
    {
      id: 3,
      img: plan,
    },
    {
      id: 4,
      img: question,
    },
  ];
  const study = language?.study?.map((item, index) => {
    return { ...studyImage[index], ...item };
  });
  const avarageData = [
    { id: 1, text: language.salary, degree: "+€70k" },
    { id: 2, text: language.employer, degree: "73%" },
    { id: 3, text: language.time, degree:"76%" },
    { id: 4, text: language.countries, degree: "180+" },
  ];

  return (
    <Wrap className="wrap" id="overview">
      <div className="container p2">
        <Study>
          <OverviewText>
            <p className="top">{language?.top}</p>
            <h1 className="title">{language?.title}</h1>
            {language.text.map((item, index) => {
              return (
                <p className="text" key={index}>
                  {item}
                </p>
              );
            })}
            {/* advantage */}
            <CardWrap>
              {study?.map((item) => {
                return (
                  <Card key={item?.id}>
                    <img src={item.img} alt="" />
                    <h4>{item.title}</h4>
                    <p className="text">{item?.text}</p>
                  </Card>
                );
              })}
            </CardWrap>
          </OverviewText>
        </Study>
        <Content>
          <h2 className="title">{language?.contentTitle}</h2>
          <GridCol>
            {language?.content?.map((item) => {
              return (
                <TextWrap key={item?.id}>
                  <span>0{item?.id}.</span>
                  <h4>{item?.title}</h4>
                  <p className="text">{item?.text}</p>
                </TextWrap>
              );
            })}
          </GridCol>
        </Content>
        <Average>
          <h1 className="title">{language.why}</h1>
          <Grid>
            {avarageData.map((item) => {
              return (
                <Box key={item?.id}>
                  <p className="text">{item.text}</p>
                  <p className="status">{item.degree}</p>
                </Box>
              );
            })}
          </Grid>
        </Average>
      </div>
    </Wrap>
  );
};

export default Overview;
