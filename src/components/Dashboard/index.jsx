import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import useAxios from '../../hooks/useAxios';
import { useCourseContext } from '../../context/Courses';
import Footer from '../Footer';
import { Container, Wrap } from './style';

const Dashboard = () => {
  const [, dispatch] = useCourseContext();
  const { request } = useAxios();
  useEffect(() => {
    request({
      url: 'enrolled-course',
    }).then((res) => {
      dispatch({ type: 'setEnrolledCourse', payload: res });
    });
  }, []);
  return (
    <Container>
      <Navbar />
      <Wrap className='container'>
        <Sidebar />
        <Outlet />
      </Wrap>
      <Footer />
    </Container>
  );
};

export default Dashboard;
