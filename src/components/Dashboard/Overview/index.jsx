import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useCourseContext } from '../../../context/Courses';
import useAxios from '../../../hooks/useAxios';
import GenericCard from '../../Generic/Card';
import { Wrap } from './style';

const Overview = () => {
  const [{ allCourses }, dispatch] = useCourseContext();
  const { request } = useAxios();
  useEffect(() => {
    request({
      url: 'courses',
    }).then((res) => {});
    dispatch({});
  }, []);
  return (
    <Wrap>
      <Wrap.Title>
        Active Subscriptions & Courses:
        <NavLink to='/user/courses'>See All courses</NavLink>
      </Wrap.Title>
      <Wrap.Cards>
        {allCourses?.length ? (
          allCourses?.map((item) => (
            <GenericCard
              title={'ACCA Mock & Talk Webinars'}
              image={
                'https://cdn5.dcbstatic.com/files/s/i/signallearn_docebosaas_com/assets/courselogo/original/Docebo+Image+Templates+-+2022-08-23T131245-2022-08-23-07-43-13.jpeg'
              }
              status='In Progress'
              lang={'en'}
              view={120021}
              like={30}
              courses={4}
            />
          ))
        ) : (
          <div>you dont have Active Courses</div>
        )}
      </Wrap.Cards>
    </Wrap>
  );
};

export default Overview;
