import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  background-color: #f1f5f9;
`;
const Container = styled.div``;
const Top = styled.p`
  color: #9ca3af;
`;
const Title = styled.h1`
  margin: 0.7rem 0;
  color: #111827;
`;

// courses card wrap
const Content = styled.div`
  margin: 5vh 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
`;

// courses card
const Card = styled.div`
  width: 320px;
  max-width: 400px;
  min-height: fit-content;
  padding: 20px;
  border-radius: 15px;
  border: 1px solid #d1d5db;
  background: white;
  box-shadow:  rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px;
  cursor: pointer;
  display: grid;
  align-content: space-between;
  @media (max-width: 600px) {
    min-height: fit-content;
    align-self: ${({ imgNot }) => imgNot && "start"};
    width: 90%;
    img {
      object-fit: contain;
    }
  }
`;

Card.Title = styled.p`
    color: #111827;
    font-size: 20px;
    margin: 0.8rem 0;
    font-weight: 700;
`
Card.Text = styled.p`
  color: #6b7280;
  font-size: 14px;
  margin: 0.8rem 0;
`
Card.Link = styled(Link)`
  display: block;
  width: 100%;
  text-decoration: none;
  padding: 12px;
  background: #000;
  color: #fff;
  border-radius: 8px;
  text-align: center;
  &:hover {
    background: #6E3BA7d5;
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
`
Card.Img = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
  max-height: 170px;
`
Card.Logo = styled.img`
    width: 50px;
`
// card logo wrap
const ImgWrap = styled.div`
`;
const Button = styled.button`
  margin-right: 10px;
  background: ${({ color }) => (color === "blue" ? "#EEF2FF" : "#FEFCE8")};
  border: 1px solid ${({ color }) => (color === "blue" ? "#A5B4FC" : "#FDE047")};
  border-radius: 20px;
  padding: 8px 8px 8px 24px;
  position: relative;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ color }) =>
    color === "blue" ? " #6366F1" : "#F59E0B"};
    position: absolute;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
  }
  @media (max-width: 600px) {
    font-size: 0.65em;
  }
`;

export {
  Wrap,
  Container,
  Top,
  Title,
  Content,
  Card,
  ImgWrap,
  Button
};
