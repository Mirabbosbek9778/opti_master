import styled from 'styled-components';
export const Border = styled.div`
  background-color: white;
  width: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
`;

Wrap.Links = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: space-between;
  max-width: 250px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
    position: fixed;
    top: 0;
    left: ${({ mediaOpen }) => (mediaOpen ? '0' : '100vw')};
    width: 100vw;
    max-width: inherit;
    height: 100vh;
    background-color: white;
    padding: 25px;
    z-index: 100;
    transition: all 0.5s;
  }
`;

Wrap.Link = styled.li``;

Wrap.Logo = styled.img`
  height: 50px;
  margin-right: 10px;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100px;
    height: fit-content;
  }
`;
export const IconWrap = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
    svg {
      width: 35px;
      height: 35px;
    }
  }
`;
export const Controllers = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

Controllers.Lang = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 0 8px;
  cursor: pointer;
`;

export const langIcon = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '5px',
  fontSize: '16px',
};

// export menuStype=styled.css{}
