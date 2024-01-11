import styled from 'styled-components';

const Color = (type) => {
    switch (type) {
        case 1:
            return {
                color: "#EF4444",
            };
        case 2:
            return {
                color: "#FACC15",
            };
        case 3:
            return {
                color: "#10B981",
            };
        default:
            return {
                color: "#fff",
            };
    }
}

const Wrap = styled.div`
    background-color: rgb(17,24,39);
`

const Container = styled.div`
`

const Text = styled.p`
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: ${({ box }) => box ? '0' : '3rem'};
    color: ${({ box }) => box ? '#D1D5DB' : '#6B7280'};
    @media(max-width:426px){
       font-weight: 400;
       letter-spacing:0;
    }
`
const TextBig = styled.h1`
    ${({ box }) =>Color(box)};
    margin-bottom: 0.25rem;
    @media(max-width:426px){
       font-weight: 400;
       font-size:${({ box }) => box ? "20px" : "30px"};
     }
`
const StepFlex = styled.div`
    display: flex;
    gap: 80px;
    @media(max-width:768px){
       flex-direction: column;
     }
`

const BoxWrap = styled.div`
    flex: 1;
`
const Box = styled.div`
    box-shadow: 0px 1px 2px rgb(0 0 0 / 6%), 0px 1px 3px rgb(0 0 0 / 10%);
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 1.5rem!important;
    background-color: #1F2937;
    display: flex;
    gap: 20px;
    align-items: flex-start;
`

export { Wrap, Container, Text, TextBig, StepFlex, BoxWrap, Box }

