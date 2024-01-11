import React from 'react';
import { Card, Container, Flex, Text, TextBig, Wrap } from './style';
import teacher from '../../../assets/images/teacher.jpeg';
import teacher1 from '../../../assets/images/teacher1.png';
import teacher3 from '../../../assets/images/teacher3.JPG';

import { useTranslation } from 'react-i18next';
const Teachers = () => {
  const { t } = useTranslation();
  const language = t('teacher', { returnObjects: true });

  return (
    <Wrap className='wrap'>
      <Container className='container' id='experts'>
        <Text>{language?.top}</Text>
        <TextBig className='h2' title='true'>
          {language?.title}
        </TextBig>
        <Text>{language?.text}</Text>
        <Flex>
          <Card>
            <img src={teacher} alt='' className='person' />
            <div>
              <TextBig className='h4'>
                {language?.aboutTeacher[0]?.name}
              </TextBig>
              <Text>{language?.aboutTeacher[0]?.status}</Text>
            </div>
          </Card>
          <Card>
            <img src={teacher1} alt='' className='person' />
            <div>
              <TextBig className='h4'>
                {language?.aboutTeacher[1]?.name}
              </TextBig>
              <Text>{language?.aboutTeacher[1]?.status}</Text>
            </div>
          </Card>
          <Card>
            <img src={teacher3} alt='' className='person' />
            <div>
              <TextBig className='h4'>
                {language?.aboutTeacher[2]?.name}
              </TextBig>
              <Text>{language?.aboutTeacher[2]?.status}</Text>
            </div>
          </Card>
        </Flex>
      </Container>
    </Wrap>
  );
};

export default Teachers;
