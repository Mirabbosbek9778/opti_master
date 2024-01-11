import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Button,
  Card,
  Container,
  Content,
  ImgWrap,
  Title,
  Top,
  Wrap,
} from './style';
import { useCourseContext } from '../../../context/Courses';
import useAxios from '../../../hooks/useAxios';
import { accountancy } from './data';
const Courses = () => {
  const { t } = useTranslation();

  const [, dispatch] = useCourseContext();
  const { request } = useAxios();

  useEffect(() => {
    request({
      url: 'courses',
    }).then((res) => {
      dispatch({ type: 'setAllCourses', payload: res });
    });
  }, []);

  return (
    <Wrap className='wrap'>
      <Container className='container' id='courses'>
        <Top>{t('coursesDesc')}</Top>
        <Title>{t('coursesTitle')}</Title>
        <p style={{ color: '#374151' }}>{t('coursesText')}</p>
        <Content>
          {accountancy?.length ? (
            accountancy?.map((item) => {
              return (
                <Card key={item?.id}>
                  <div>
                    <Card.Img src={`${item?.img}`} />
                    <Card.Text>Approved Tuition Provider:</Card.Text>
                    {item?.logo && (
                      <ImgWrap>
                        <Card.Logo src={`${item?.logo}`} />
                      </ImgWrap>
                    )}
                    <Card.Title>{item?.title}</Card.Title>
                    <Card.Text>{item?.text}</Card.Text>
                  </div>
                  <div>
                    <Card.Text>Overview:</Card.Text>
                    <div>
                      <Button color='blue'>{item?.level} Levels</Button>
                      <Button>{item?.lessons} Lessons</Button>
                    </div>
                    <Card.Text>Qualification achieved:</Card.Text>
                    <Card.Link to={`/${item?.id}`}>View Courses</Card.Link>
                  </div>
                </Card>
              );
            })
          ) : (
            <h1>not found</h1>
          )}
        </Content>
      </Container>
    </Wrap>
  );
};

export default Courses;
