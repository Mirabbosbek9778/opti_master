import styled from 'styled-components';
import noImage from '../../../assets/images/noImage.jpg';

const getStatus = (status) => {
  switch (status) {
    case 'Not Started': {
      return {
        bg: '#999999',
        color: '#f2f2f2',
      };
    }
    case 'In Progress': {
      return {
        bg: '#f2f2f2',
        color: '#999999',
      };
    }
    case 'Completed': {
      return {
        bg: '#8bc34a',
        color: '#f2f2f2',
      };
    }
    default: {
      return {
        bg: '#999999',
        color: '#f2f2f2',
      };
    }
  }
};

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 210px;
  height: 250px;
  color: rgb(33, 39, 33);
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 1px 4px 0px;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 4px 8px 0px;
  }
  cursor: pointer;
`;

Wrap.Header = styled.figure`
  position: relative;
  width: 100%;
  height: 100px;
  background-image: ${({ bg }) => (bg ? `url(${bg})` : `url(${noImage})`)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  .status {
    position: absolute;
    right: 4px;
    top: 4px;
    padding: 4px;
    border-radius: 2px;
    font-size: 10px;
    background-color: ${({ status }) => getStatus(status).bg};
    color: ${({ status }) => getStatus(status).color};
    border: 1px solid transparent;
    transition: all 0.2s linear;
  }
  .status:hover {
    background-color: ${({ status }) => getStatus(status).color};
    color: ${({ status }) => getStatus(status).bg};
    border: ${({ status }) => `1px solid ${getStatus(status).bg}`};
  }

  @-webkit-keyframes shine {
    0% {
      z-index: 2;
    }
    100% {
      left: 125%;
      z-index: -1;
    }
  }
  @keyframes shine {
    0% {
      z-index: 2;
    }
    100% {
      left: 125%;
      z-index: -1;
    }
  }
`;
Wrap.Image = styled.img``;

Wrap.Title = styled.h3`
  font-size: calc(0.875 * 16px);
  font-weight: 500;
  line-height: 1.24rem;
  color: #212721;
  padding: 15px 6px;
`;

Wrap.Footer = styled.div`
  margin-top: auto;
  display: flex;
  align-items: center;
  min-height: 40px;
  .course_details {
    display: flex;
    width: 100%;
    align-items: center;
    font-size: 14px;
    font-family: 'Manrope-thin';
    color: rgb(33, 39, 33);
    .courses {
      margin-left: auto;
    }
    padding: 0 6px;
  }
  .reactions {
    border-top: 1px solid #e4e5e6;
    padding: 0 6px;
  }
`;
