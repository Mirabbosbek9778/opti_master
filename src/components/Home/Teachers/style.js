import styled from 'styled-components';

const Wrap = styled.div`
`

const Container = styled.div`
`
const Text = styled.p`
    font-weight: 500;
    font-size: 14px;
    color: ${({ title }) => title ? '#D1D5DB' : '#6B7280'};
    @media(max-width:426px){
       font-weight: 400;
    }
`
const TextBig = styled.h2`
    color:  var(--c-grey-dark);
    margin:${({ title }) => title ? "0.25 rem 0" : "1rem 0"};
    @media(max-width:768px){
        margin: 0 0 1rem;
    }
`
const Flex = styled.div`
    margin-top: 4rem;
    display: flex;
    gap: 50px;
    flex-wrap: wrap;
    justify-content: space-between;
    @media(max-width:480px){
       flex-direction: column;
    }
`
const Card = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    @media(max-width:820px){
        flex: none;
        width: 47%;
        gap: 10px;
        align-items: flex-start;
        flex-direction: row;
    }
    @media(max-width:480px){
        width: auto;
    }
    .person {
        max-width: 300px;
        max-height:320px;
        object-fit: scale-down;
        object-position:left;
        @media(max-width:820px){
        width: 100px;
        height: auto;
    }
    }
    .linkedin {
        vertical-align: middle;
        float: right;
    }
`
export { Wrap, Container, Text, TextBig, Flex, Card }