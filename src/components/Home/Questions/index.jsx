import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Text, Title, Wrap } from "./style";
import { useTranslation } from "react-i18next";
const Questions = ({ style }) => {
  const [expanded, setExpanded] = React.useState(false);
  const { t } = useTranslation();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const styleMenu = {
    boxShadow: "0px 2px 4px rgb(0 0 0 / 6%), 0px 4px 6px rgb(0 0 0 / 10%)",
    borderRadius: "16px",
    margin: "12px 0",
    fontSize: "18px",
    border: "none",
    position: "static",
    background: "white",
  };
  const styleOne = {
    background: "transparent",
    border: "none",
    boxShadow: "none",
    position: "static",
  };
  const questions = [
    {
      id: 1,
      question: t("questionOne"),
      answer: t("answerOne"),
    },
    {
      id: 2,
      question: t("questionTwo"),
      answer: t("answerTwo"),
    },
    {
      id: 3,
      question: t("questionThree"),
      answer: t("answerThree"),
    },
    {
      id: 4,
      question: t("questionFour"),
      answer: t("answerFour"),
    },
  ];

  return (
    <Wrap className="wrap" id="faqs">
      <div className={`container ${style}`}>
        <Title>FAQs🤔</Title>
        <Text>{t("faqText")}</Text>
        {questions?.map((item) => {
          return (
            <Accordion
              key={item.id}
              expanded={expanded === `panel${item?.id}`}
              onChange={handleChange(`panel${item?.id}`)}
              sx={styleOne}
              disableGutters
            >
              <AccordionSummary
                sx={styleMenu}
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${item.id}bh-content`}
                id={`panel${item.id}bh-header`}
              >
                <Typography
                  sx={{
                    color: "#111827",
                    fontWeight: "600",
                    padding: "10px 20px",
                  }}
                  className="desc"
                >
                  {item?.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="p">{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </Wrap>
  );
};

export default Questions;
