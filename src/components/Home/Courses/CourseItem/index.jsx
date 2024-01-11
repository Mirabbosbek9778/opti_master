import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Overview from './Overview';
import Questions from '../../Questions/index';
import Footer from '../../../Footer/index';
import Sidebar from './Sidebar';

import { Flex, FlexCol } from './style';
import Testimonials from '../../Testimonial';
import { useCourseContext } from '../../../../context/Courses';
import useAxios from '../../../../hooks/useAxios';

const CourseItem = () => {
  const { id } = useParams();
  const [{ allCourses }, dispatch] = useCourseContext();
  const { request } = useAxios();

  useEffect(() => {
    request({
      url: 'courses',
    }).then((res) => {
      dispatch({ type: 'setAllCourses', payload: res });
    });
  }, []);

  let newData = allCourses?.find((item) => item.id === id);

  return (
    <FlexCol className='Wrap'>
      <Header data={newData} />
      <Flex>
        <Sidebar />
        <Overview name={newData?.sub_title} />
        {/* <Curriculum /> */}
        <Testimonials style={'p2'} />
        <Questions style={'p2'} />
      </Flex>
      <Footer />
    </FlexCol>
  );
};

export default CourseItem;
