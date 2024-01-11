import styled from 'styled-components';
import meeting2 from '../../../assets/images/meeting2.jpg'

const Wrap = styled.div`
    min-height: 600px;
    max-height: 800px;
    max-width: 1920px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: url(${meeting2});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:#f1f1f1e9;
    }

`
const TextWrap = styled.div`
    width: 50vw;
    position: relative;
    text-align: center;
    @media (max-width:800px){
        width: 80%;
    }   
    @media (max-width:576px){
        width: 90%;
    }
`
const Title = styled.h1`
    color: var(--c-grey-dark);
    i {
        position: relative;
        &::before {
            background-color: #7f06b8;
            content: "";
            position: absolute;
            bottom: 0;
            height: 4px;
            width: 100%;
            transform: rotate(-2deg);
            border-radius: 8px;
        }
    }
`
const Text = styled.div`
    color: #4B5563;
    margin: 2rem 0;
    @media(max-width:375px){
        font-size: 16px;
        letter-spacing: 0.5px;
    }
`

export { Wrap, TextWrap, Title, Text }