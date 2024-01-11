import styled from "styled-components";

const Container = styled.div`
`
const Wrap = styled.div`
    background: rgb(241,241,241);
`

const Section = styled.div`
    width: 100%;
    margin-bottom: 5rem;
    padding: 64px;
    box-shadow: 0px 20px 25px rgb(0 0 0 / 10%), 0px 10px 10px rgb(0 0 0 / 4%);
    border-radius: 16px;
    text-align: center;
    background-color: white;
    position: relative;
    &::before {
        content: "";
        width: 100%;
        top: 0;
        height: 16px;
        position: absolute;
        background: var(--c-green-dark);
        left: 0;
        border-radius: 16px 16px 0px 0px;
    }
    @media screen and (max-width:426px) {
        padding:20px;
    }
    @media screen and (max-width:320px) {
        padding:20px;
    }
 `
const Title = styled.h2`
    font-size: 2rem;
    color:var(--c-grey-dark);
    @media (max-width: 768px) {
        font-size: 18px;
        margin-top:1rem;
        line-height: 27px;
        font-weight: 500;
    }
`
const Text = styled.p`
    margin: 1rem 0;
    color:var(--c-grey-dark);
    @media (max-width: 768px) {
        font-size: 14px;
        font-weight: 300;
    }
`
const BoxWrap = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns:  auto auto;
    gap: 1.5rem;
    justify-content:center;
    @media (max-width:1024px){
        grid-template-columns:auto;
    }
`
const Box = styled.div`
    height:214px;
    width: 214px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #CBD5E1;
    border-radius: 8px;
    padding: 20px;
    img {
        width: 100%;
    }
`
// used link start
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    text-align: center;
    @media (max-width:1024px) {
        flex-direction: column;
    }
`
const Used = styled.div`
`
const RowBox = styled.div`
    display: grid;
    grid-template-columns:${({ three }) => three ? "repeat(3,1fr)" : "repeat(2,1fr)"};
    gap: 1rem;
    text-align: left;
    div {
        width: 180px;
        height: 114px;
    }
    @media (max-width:1024px){
        grid-template-columns:repeat(2,1fr);
        div {
        width: auto;
        height: 114px;
    }   
    }
`
const Title2 = styled.h2`
    font-size: 20px;
    line-height: 30px;
    color: #4B5563;
    margin-bottom: 1rem;
`
// used link end



export { Container, Wrap, Section, Title, Text, BoxWrap, Box, Row, Used, RowBox, Title2 }