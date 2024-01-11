import styled from "styled-components";

const Wrap = styled.div`
overflow: hidden;
    .top{
        color: #9ca3af;
        font-weight: 400;
        margin: 1rem 0;
    }
    .title {
        margin: 1rem 0;
    }
    .text {
        margin-bottom: 2rem ;
    }
    .p2 {
        padding-left: 200px;
    }
    
    @media( max-width:1024px){
        .p2 {
            padding-left: 0;
        }
    }
`

const Level = styled.div`
    display:flex;
    min-height: 150px;
    border-radius: 20px;
    border: 1px solid #d1d5db;
    box-shadow:0px 2px 10px #d1d5db;
    & > div:nth-child(1){
        border: none;
    }
    @media screen and (max-width:768px) {
        overflow-y: auto;
    }
`
const LevelBox = styled.div`
    display: grid;
    align-content:space-between;
    flex: 1 0 0;
    border-left: 1px solid grey;
    background-color: ${({ checked }) => checked ? '#00B67A' : "#fff"};
    transition: 120ms transform ease-in-out;
    .check{
        padding: 20px;
        display: flex;
        gap: 15px;
        align-items: center;
        input {
            flex-shrink: 0;
            -webkit-appearance: none;
            appearance: none;
            background-color: #fff;
            margin: 0;
            font: inherit;
            color: currentColor;
            width: 20px;
            height: 20px;
            border: 0.16em solid currentColor;
            border-radius: 50%;
            transform: translateY(-0.075em);
            display: grid;
            place-content: center;
        }
        input[type="radio"]::before {
            content: "";
            width: 7px;
            height: 7px;
            border-radius: 50%;
            transform:scale(${({ checked }) => checked ? '1' : "0"});
            background-color: CanvasText;
        }
        label {
            color: ${({ checked }) => checked ? '#fff' : "#111827"};
            word-spacing: 5px;
            span {
                margin-top: 5px;
                display: block;
                width: 100%;
                font-size: 12px;
                font-weight: 600;
                padding: 4px 12px;
                background-color: ${({ checked }) => checked ? '#059669' : "#f3f4f6"};
                border-radius: 4px;
                margin-bottom: 0;
                color: ${({ checked }) => checked ? '#fff' : "#4b5563"};
                letter-spacing: 1px;
            }
        }
    }
    a {
        border-top: 1px solid;
        padding: 12px 20px;
        padding-left:50px;
        color: #059669;
        font-size: 16px;
        font-weight: 700;
        background-color: ${({ checked }) => checked ? '#111827' : "#f3f4f6"};
        border-color: ${({ checked }) => checked ? "#111827" : "#d1d5db"};
        display: flex;
        align-items: center;
        gap: 10px;
    }
`

const Courses = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 40px;
    @media screen and (max-width:768px) {
        grid-template-columns: auto;
    }
`

const Card = styled.div`
    border: 1px solid #f3f4f6;
    border-radius: 16px;
    background-color: #fff;
    padding: 20px;
    font-weight: 700;
    .status{
        color: #6b7280;
        font-size: 13px;
        background-color: #f3f4f6;
        border-radius: 4px;
        padding: 5px;
    }
    a {
        margin-top: 40px;
        display: block;
        background-color: #fff;
        border-radius: 8px;
        color: var(--c-green-light);
        padding:5px 12px;
        border: 2px solid var(--c-green-light);
        text-align: center;
    }
    a:hover {
        background-color: var(--c-green-light);
        color: #fff;
    }
`

export { Wrap, Level, LevelBox, Courses, Card }