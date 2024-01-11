import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-radius: 15px;
  background-color: white;
`;

Wrap.Title = styled.div`
  color: #111827;
  font-size: 25px;
  font-family: "Manrope-Medium";
  font-family: var(--main-font);
  display: flex;
  margin: 20px 0;
  a {
    font-size: 18px;
    color: var(--c-green-light);
    margin-left: auto;
  }
`;

Wrap.Header = styled;

Wrap.Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;
