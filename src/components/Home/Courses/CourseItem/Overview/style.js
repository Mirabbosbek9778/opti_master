import styled from "styled-components";

const Wrap = styled.div`
    background-color: #F8FAFC;
    .p2 {
        padding-left: 200px;
    }
    @media( max-width:1024px){
        .p2 {
            padding-left: 0;
        }
    }
`
const Study = styled.div`
    display: flex;
    gap: 50px;
    align-items: flex-start;
    justify-content: space-between;
`

const OverviewText = styled.div`
    .top {
        color: #9ca3af;
        font-weight: 400;
    }
    .title {
        color: #111827;
    }
    .text {
        color:#3333339f;
        margin: 1rem 0;
        font-size: 15px;
    }
`
const CardWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 40px;
    @media screen and (max-width:768px) {
        grid-template-columns: auto;
    }
`
const Card = styled.div`
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 6%), 0 1px 3px rgb(0 0 0 / 10%);
    background-color: #fff;
`
const Content = styled.div`
    margin: 3rem 0;
    width: 100%;
    min-height: 60vh;
    background: #111827;
    border-radius: 32px;
    padding: 3rem;
    .title {
        font-weight: 500;
        color: #e802d1;
        font-size: 28px;
        line-height: 42px;
        margin-bottom: 2rem;
    }
`
const Title = styled.h1`
   
`
const GridCol = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    justify-content: space-between;
    gap: 0px 60px;
    @media screen and (max-width:768px) {
        grid-template-columns: auto;
    }
`
const TextWrap = styled.div`
    padding: 5% 12%;
    position: relative;
    color: white;
    .text {
        margin-top: 1rem;
        color: #9ca3af;
        font-weight: 500;
        font-size: 15px;
    }
    span {
        position: absolute;
        left:-5px;
        color: #6b7280;
        font-size: 20px;
    }
`
const Average = styled.div`
    box-shadow: 0 1px 2px rgb(0 0 0 / 6%), 0 1px 3px rgb(0 0 0 / 10%);
    padding: 40px;
    border-radius: 20px;
    background-color: white;
    .title {
        color: rgba(255,105,0,.7);
        font-size: 28px;
        background-color: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);
    }
`
const Grid = styled.div`
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    & div:nth-child(1){
        border: none;
        padding: 0;
    }
    @media screen and (max-width:768px) {
        grid-template-columns: auto;
        gap: 35px;
    }
`
const Box = styled.div`
    padding-left: 20px;
    color: #111827;
    border-left: 2px solid #1118271e;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
    .text {
        font-size: 14px;
        line-height: 24px;
        font-weight: 500;
    }
    .status {
        font-size: 32px;
        line-height: 54px;
        font-weight: 700;
    }
    @media screen and (max-width:768px) {
        padding: 0;
        border: none;
    }
`

export { Wrap, Study, OverviewText, Card, CardWrap, Content, Title, TextWrap, GridCol, Average, Grid,Box }