import styled from 'styled-components';

const Section1 = styled.div`
  padding-top: 4rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const Col = styled.div`
  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;
const FooterMenuHeading = styled.h3`
  margin-bottom:${({ imgLogo }) => imgLogo ? "0" : "1rem"};
  font-size: 16px;
  position: relative;
  svg {
    display: none;
  }
  .logo {
    height: 4vw;
  }
  @media screen and (max-width: 768px) {
    svg {
      display: block;
      position: absolute;
      right: 0;
      top: 10%;
    }
  }
  @media screen and (max-width: 480px) {
    .logo {
      height: auto;
      width: -webkit-fill-available;
    }
  }
`;
const FooterMenuList = styled.ul`
  list-style: none;
  li a {
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    margin-bottom: 11px;
    color: #111827;
    letter-spacing: 0.8px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media (max-width: 768px) {
    display: ${({ media }) => (media ? 'none' : 'block')};
    li a {
      font-size: 13px;
      margin-bottom: 8px;
      span {
        display: none;
      }
    }
    display: ${({ link }) => link && 'flex'};
    justify-content: space-between;
  }
`;

const Section2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0 4rem;
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
const Text = styled.div`
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ grey }) => (grey ? '#9ca3af' : '#374151')};
  border-bottom: ${({ line }) => (line ? '0.5px solid #374151 ' : 'none')};
`;
export { Section1, Col, Section2, FooterMenuHeading, FooterMenuList, Text };
