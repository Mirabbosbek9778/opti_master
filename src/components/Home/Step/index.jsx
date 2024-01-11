import React from 'react';
import {
  Box,
  BoxWrap,
  Container,
  StepFlex,
  Text,
  TextBig,
  Wrap,
} from './style';
import attain from '../../../assets/images/attain.png';
import apply from '../../../assets/images/apply.png';
import achieve from '../../../assets/images/achieve.png';
import illustration from '../../../assets/images/illustration.png';
import { useTranslation } from 'react-i18next';

const Step = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: 1,
      img: attain,
      title: t('stepListOne'),
      text: t('stepListOneText'),
    },
    {
      id: 2,
      img: apply,
      title: t('stepListTwo'),
      text: t('stepListTwoText'),
    },
    {
      id: 3,
      img: achieve,
      title: t('stepListThree'),
      text: t('stepListThreeText'),
    },
  ];
  return (
    <Wrap className='wrap'>
      <Container className='container' id='why-us'>
        <Text>{t('whyUs')}</Text>
        <TextBig className='h1'>{t('stepTitle')} 🚀</TextBig>
        <Text>{t('stepText')}</Text>
        <TextBig className='h3'>{t('stepHeader')}</TextBig>
        <Text>{t('stepDesc')}</Text>
        <StepFlex>
          <BoxWrap>
            {data?.map((item) => {
              return (
                <Box key={item?.id}>
                  <img src={item?.img} alt='' />
                  <div>
                    <TextBig box={item?.id}>{item?.title}</TextBig>
                    <Text box>{item?.text}</Text>
                  </div>
                </Box>
              );
            })}
          </BoxWrap>
          <div>
            <img src={illustration} alt='' width='100%' />
          </div>
        </StepFlex>
      </Container>
    </Wrap>
  );
};

export default Step;
