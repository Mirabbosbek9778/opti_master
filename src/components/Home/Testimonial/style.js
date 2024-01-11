import styled from 'styled-components';

const Wrap = styled.div`
    height: fit-content;
    background-color: var(--c-grey);
    .p2 {
        padding-left: 200px;
    }
    
    @media( max-width:1024px){
        .p2 {
            padding-left: 0;
        }
    }
`;
const Container = styled.div``;


// title decription
const Small = styled.div`
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
    color: var(--c-grey-light);
    margin-bottom: 1rem;
`

// left great card
const Great = styled.div`
    display: grid;
    width: 200px;
    text-align: center;
    flex-shrink: 0;
    .grey {
        background-color: #DCDCE6;
        color: white;
    }
    .title {
        font-size: 20px;
    }
    .review {
        font-size: 12px;
    }
    h5 {
        display: flex;
        align-items: end;
        justify-content: center;
        svg {
            color: #00B67A;
        }
    }
    @media (max-width:480px){
        width: 100%;
    }
`
const Text = styled.h4`
    width: 50%;
    color: #374151;
    margin-bottom: 2rem;
    font-size: 16px;
    font-weight:500;
    line-height: 27px;
    @media screen and (max-width:769px){
        width: 100%;
    }
`

// star
const Icon = styled.div`
    display: flex;
    gap: 2px;
    margin-bottom: ${({ card }) => card==='true' && "1rem"};
    justify-content: ${({ card }) => card==='true' ? 'left' : 'center'};
    align-items: center;
    svg {
        width: ${({ card }) => card==='true' ? '1.4rem' : "2rem"};
        height:${({ card }) => card==='true' ? '1.4rem' : "2rem"};
        padding: 2px;
        background-color:${({ card }) => card==='true' ? "#00B67A" : 'yellowgreen'} ;
        color: white;
    }
`

// slider wrap
const CardWrap = styled.div`
    display: flex; 
    .swiper-android .swiper-slide {
        padding-left: 40px;
    }
    .swiper-button-next::after,.swiper-button-prev::after {
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        border: var(--c-grey-light) 1px solid;
        color: var(--c-grey-light);
        font-size: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #F1F1F1;
    }
    .swiper-button-next {
        right: 0;
    }
    .swiper-button-prev {
        left:  0;
    }   
    @media (max-width:480px){
        flex-direction: column;
        gap: 30px;
        .swiper {
            margin: 0;
        }
    }
`
const Card = styled.div`
    padding-right: 40px;
    .title {
        letter-spacing: 1px;
        font-size: 0.8rem;
        font-weight: 700;
        line-height: 16px;
        margin: 0 0 6px;
        height: 16px;
        overflow: hidden;
    }
    .text {
        display: block;
        color: #4b5563aa;
        text-decoration: none;
        height: 32px;
        overflow: hidden;
        font-size: 0.7rem;
        line-height: 16px;
        margin: 10px 0;
        word-spacing: 4px;
    }
    .userInfo {
        color: #4b5563af;
        font-size: 11px;
    }
    @media (max-width:480px) {
        padding: 0 40px;
    }
`

export { Wrap, Container, Small, Text, CardWrap, Great, Icon, Card }
