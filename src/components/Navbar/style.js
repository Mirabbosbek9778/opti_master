import styled from 'styled-components';

export const NavWrap = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  vertical-align: middle;
  @media (max-width: 768px) {
    width: 100px;
    height: 50px;
  }
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const activeStyle = ({ isActive }) => {
  return {
    color: isActive ? '#00fff5' : '#111827',
    textDecoration: 'none',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '24px',
  };
};
const LinkWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const IconWrap = styled(LinkWrap)`
  /* select css */
  .css-1rxz5jq-MuiSelect-select-MuiInputBase-input-MuiInput-input {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  @media (max-width: 768px) {
    flex-direction: row-reverse;
    gap: 10px;
  }
`;
const MediaWrap = styled.div`
  .closeIcon {
    display: none;
  }
  @media (max-width: 768px) {
    width: 100%;
    position: fixed;
    top: 0;
    left: ${({ media }) => (media ? '100%' : '0')};
    flex-direction: column;
    z-index: 1000;
    height: 100vh;
    background-color: #f2f7ff;
    padding: 20px;
    transition: all 0.5s;
    transition-delay: 0.09s;
    .closeIcon {
      width: fit-content;
      display: block;
      margin-left: auto;
    }
  }
`;
const Button = styled.button`
  display: ${({ desctop }) => (desctop === 'false' ? 'none' : 'flex')};
  padding: 8px 20px;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  background-color: #f3f4f6;
  color: #111827;
  align-items: center;
  justify-content: center;
  gap: 5px;
  @media (max-width: 768px) {
    display: ${({ media }) => (media === 'true' ? 'flex' : 'none')};
    padding: 4px 8px;
    span {
      display: none;
    }
  }
`;
const Login = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const langIcon = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '5px',
  fontSize: '16px',
};
export {
  Logo,
  Ul,
  Login,
  activeStyle,
  langIcon,
  Button,
  LinkWrap,
  IconWrap,
  MediaWrap,
};
