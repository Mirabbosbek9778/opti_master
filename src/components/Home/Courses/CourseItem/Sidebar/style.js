import styled from "styled-components";


const SidebarWrap = styled.div`
    padding: 20px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 6%), 0 4px 6px rgb(0 0 0 / 10%);
    border-radius: 15px;
    background-color: #fff;
    max-width: 160px;
    width: fit-content;
    height: fit-content;
    position: ${({ fixed }) => {
        switch (fixed) {
            case 'top':
                return 'fixed'
            case 'bottom':
                return 'sticky'
            default:
                return 'absolute'
        }
    }};
    top: 100px;
    bottom: 100px;
    left: calc(${((window.innerWidth - 1024) / 2) + "px"});
    z-index: 10;
    display:flex;
    flex-direction: column;
    gap: 25px;
    flex-shrink: 0;
    a {
        color:#111827;        

    }
    button {
        padding: 10px 15px;
    }
    @media( max-width:1024px){
        display: none;
    }
`
const activeStyle = ({ isActive }) => {
    return {
        color: isActive ? '#00b67a' : '#111827',
        fontWeight: isActive ? '700' : '500',
        fontSize: '16px',
        lineHeight: '24px',
    };
};

export { SidebarWrap, activeStyle };