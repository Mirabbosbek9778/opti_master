import styled from "styled-components";
const Wrap = styled.div`
    min-height: fit-content;
    background-color: var(--c-blue-light);
    .p2 {
        padding-left: 200px;
    }
    
    @media( max-width:1024px){
        .p2 {
            padding-left: 0;
        }
    }
`
const Title = styled.h1`
    text-align: center;
`
const Text = styled.p`
    text-align: center;
    color: var(--c-grey-light);
    margin-bottom: 2rem;
`
export { Wrap,Title,Text }