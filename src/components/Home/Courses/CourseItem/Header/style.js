import styled from "styled-components";

const Wrap = styled.div`
    width: 100%;
    min-height: 60vh;
    background: #111827;
    border-radius: 32px;
    padding: 3rem;
    display: flex;
    justify-content: space-between;
    gap: 40px;
    @media screen and (max-width:768px) {
        padding:2rem;
        flex-direction: column-reverse;
    }
`
const TextWrap = styled.div`
    color: white;
    align-self: center;
    .text {
        margin: 2.5rem 0 1.5rem 0;
        color: #9ca3af;
        font-weight: 500;
    }
`
const ImgWrap = styled.div`
    flex: 0 0 auto;
    width: 50%;
    img {
        min-height: 100%;
        min-width: 100%;
        max-width: 500px;
        max-height: 500px;
        background: linear-gradient(153deg, rgba(69,88,89,1) 8%, rgba(17,24,39,1) 72%);
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
        aspect-ratio: auto 492 / 492;
    }
    @media screen and (max-width:768px) {
        width: 100%;
    }
`
const Button = styled.button`
    color: #fff;
    background-color: var(--c-green-light);
    border-color: var(--c-green-light);
    padding: 16.5px 40px;
    border: none;
    border-radius: 0.25rem;
`
export { Wrap, TextWrap, ImgWrap, Button }