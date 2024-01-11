import styled from 'styled-components';



const Wrap = styled.div`
    background-color: rgb(239,246,255);
`

const Container = styled.div`
`
const Text = styled.p`
    font-weight: 500;
    margin-bottom: 1rem!important;
    font-size: 18px;
    color: '#6B7280';
    @media(max-width:426px){
       font-weight: 400;
   }
`
const TextBig = styled.h2`
    color: var(--c-grey-dark);
    margin-bottom: 0.25rem!important;
    `
const BoxWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4,auto);
    gap: 20px;
    justify-content: space-between;
    margin-top: 4rem;
    div {
        width: fit-content;
        border-top: 2px solid var(--c-grey-dark);
        padding: 40px 0;
    }
    @media(max-width:768px){
       grid-template-columns: repeat(2,1fr);
     }
     @media(max-width:425px){
        gap: 0px;
       grid-template-columns: repeat(1,1fr);
        div {
            padding: 20px 0  30px 0;
        }
     } 
`
const Partner = styled.div`
    display: flex;
    margin-top: 3rem;
    gap: 20px;
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 160px;
        height: 160px;
        background: #fff;
        padding: 16px 30px;
        border-radius: 8px;
        vertical-align: middle;
        img {
            width: 100%;
        }
    }
    overflow-y: auto;

`

export { Container, Wrap, Text, TextBig, BoxWrap, Partner }