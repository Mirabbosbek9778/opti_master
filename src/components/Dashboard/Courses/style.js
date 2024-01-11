import styled from 'styled-components';

export const Wrap = styled.div`
  background: #fff;
  border: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1);
`;

Wrap.Title = styled.div`
  font-weight: 700;
  font-size: 28px;
  color: #111827;
`;

Wrap.Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
`;
