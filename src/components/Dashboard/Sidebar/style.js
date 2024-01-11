import styled from 'styled-components';

export const Wrap = styled.ul`
  background-color: #0F172A;
  display: flex;
  flex-direction: column;
  min-width: 40px;
  padding: 20px;
  border-radius: 20px;
  list-style: none;
  row-gap: 20px;
  #logo {
    padding: 20px 14px 20px 18px;
    height: 64px;
    cursor: pointer;
  }
  .active {
    width: 100%;
    min-height: 100%;
    background: #1e293b;
    color: #fff;
    box-shadow: 0px 2px 6px rgba(115, 103, 240, 0.48);
    .icon {
      fill: #fff;
    }
    &::before {
      content: "";
      position: absolute;
      left: 0;
       background: #10b981;
       width: 6px;
       height: 100%;
      border-radius: 6px 0 0 6px;
      }
  }
  @media (max-width:981px){
    display: none;
  }
`;

Wrap.Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  a {
    color:${({ media }) => media ? "#111827" : "#94a3b8"} ;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 9px 16px;
    border-radius: 6px;
    box-shadow: none;
    transition: all 0.2s ease-in-out;
    font-weight: 600;
  }
  .icon {
    fill:${({ media }) => media ? "#111827" : "#94a3b8"};
  }
  a span {
    padding-left: 8px;
  }
  
`;

export const Media = styled.div`
  display: none;
  @media (max-width:981px){
    display: block;
    background-color: white;
  }
`

// export const Desctop = styled.div`
//   display: block;
//   @media (max-width:981px){
//     display: none;
//   }
// `