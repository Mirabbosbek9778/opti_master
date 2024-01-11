import React from "react";
import { useTranslation } from "react-i18next";

import {
  Container,
  Title,
  Wrap,
  Text,
  BoxWrap,
  Box,
  Section,
  // Row,
  // Title2,
  // RowBox,
  // Used,
} from "./style";
// import chaaof from "../../../assets/images/chaaof.png";
// import cpa from "../../../assets/images/cpa.png";
// import eqf from "../../../assets/images/eqf.png";
// import gcu from "../../../assets/images/gcu.png";
// import scqf from "../../../assets/images/scqf.png";
import sponsor1 from "../../../assets/images/sponsor1.jpg";
import sponsor2 from "../../../assets/images/sponsor2.jpg";



const Provider = () => {
  const { t } = useTranslation();

  return (
    <Wrap className="wrap">
      <Container className="container">
        {/* Provider start */}
        <Section>
          <Title className="h2">{t("providerTitle")}</Title>
          <Text>{t("providerText")}</Text>
          <BoxWrap>
            <Box>
              <img src={sponsor1} alt="acca" />
            </Box>
            <Box>
              <img src={sponsor2} alt="aat" />
            </Box>
          </BoxWrap>
        </Section>
        {/* Provider end */}
        {/* UsedLink */}
        {/* <Row>
          <Used>
            <Title2>{t("cartaOne")}</Title2>
            <RowBox>
              <Box>
                <img src={chaaof} alt="chaaof" />
              </Box>
              <Box>
                <img src={cpa} alt="cpa" />
              </Box>
            </RowBox>
          </Used>
          <div>
            <Title2>{t("cartaTwo")}</Title2>
            <RowBox three="true">
              <Box>
                <img src={gcu} alt="gcu" />
              </Box>
              <Box>
                <img src={eqf} alt="eqf" />
              </Box>
              <Box>
                <img src={scqf} alt="scqf" />
              </Box>
            </RowBox>
          </div>
        </Row> */}
        {/* used link end */}
      </Container>
    </Wrap>
  );
};

export default Provider;
