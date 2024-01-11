import React from 'react';
import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
`;

export const Sidebar = styled.div`
  flex: 0 0 200px;
  padding: 20px;
  background-color: #f5f5f5;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  h1 {
    font-weight: 700;
    font-size: 16px;
    color: #1c1d1f;
  }
  span {
    font-weight: 400;
    font-size: 14px;
    color: #1c1d1f;
  }
  .section_title {
    margin-top: 50px;
  }
`;
export const Questions = styled.ol`
  margin: 20px;

  li {
    margin-bottom: 20px;
  }
`;

export const SectionTitle = styled.h2`
  margin-top: 0;
  font-weight: 700;
  font-size: 16px;
  color: #1c1d1f;
`;

export const LessonList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Lesson = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
  color: ${(props) => (props.isActive ? '#1c1d1f' : '#333')};
  background-color: ${(props) => (props.isActive ? '#d1d7dc' : 'transparent')};

  &:hover {
    background-color: ${(props) => (props.isActive ? '#d1d7dc' : '#eee')};
  }
  font-weight: 400;
  font-size: 14px;
  padding: 5px 10px;
`;

export const VideoPlayer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
`;

export const VideoFrame = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
