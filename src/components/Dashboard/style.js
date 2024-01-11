import styled from "styled-components";

const Container = styled.div`
  background-color: #f8fafc;
`;

const Wrap = styled.div`
  min-height: calc(100vh - 20vh);
  padding: 30px 0;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 30px;
  @media (max-width:981px){
      grid-template-columns: 1fr;
      grid-template-rows: max-content;
  }
`;


export { Container, Wrap }