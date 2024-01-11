import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import StarRateIcon from "@mui/icons-material/StarRate";

import {
  Container,
  Small,
  Wrap,
  Text,
  CardWrap,
  Great,
  Card,
  Icon,
} from "./style";

const Testimonials = ({style}) => {
  const { t } = useTranslation();

  const language = t("testimonials", { returnObjects: true});


  return (
    <Wrap className='wrap' id="testimonials">
      <Container className={`container ${style}`}>
        <Small>{language?.top}</Small>
        <h1 className='h1'>{language?.title}</h1>
        <Text>
        {language?.text}  </Text>
        <CardWrap>
          <Great>
            <p className="title">{language?.great}</p>
            <Icon>
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon />
              <StarRateIcon className="grey" />
            </Icon>
            <p className="review">{language?.review}</p>
            <h5>
              <StarRateIcon />
              Trustpilot
            </h5>
          </Great>
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            navigation={{ "--swiper-navigation-sides-offset": "-100px" }}
            breakpoints={{
              2560: {
                slidesPerView: 4,
              },
              1440: {
                slidesPerView: 3,
              },

              1024: {
                slidesPerView: 2,
              },
              
            }}
          >
            {language?.data?.map((item) => {
              return (
                <SwiperSlide key={item?.id}>
                  <Card>
                    <Icon card='true'>
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                      <StarRateIcon />
                    </Icon>
                    <p className="title">{item?.title}</p>
                    <Link className="text" to="/">
                      {item?.text}
                    </Link>
                    <p className="userInfo">
                      <b>{item?.name}</b>  {item?.date}
                    </p>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </CardWrap>
      </Container>
    </Wrap>
  );
};

export default Testimonials;
