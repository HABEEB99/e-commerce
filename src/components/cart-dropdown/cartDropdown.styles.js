import styled from "styled-components";


export const Container = styled.div`
display: flex;
flex-direction: column;
overflow-y: scroll;
position: relative;
z-index: 10;
background: #244d4d;
width: 25vw;
height: 80vh;
top: 4rem;
right: 0rem;
position: absolute;
transition: all 0.2s ease-in-out;



h4{
    font-size: 2rem;
    color: white;
    text-align: center;
    margin-top: 16rem;
}
`;

export const Box = styled.div`
flex: 8;
`;

export const Wrapper = styled.div`

`;


export const Button = styled.button`
height: 3rem;
background: white;
color: black;
font-size: 1.5rem;
width: 90%;


&:hover{
background: #244d4d;
color: white;
}
`;


export const ButtonWrapper = styled.button`
flex: 2;
margin: 0.5rem 0;
background: #244d4d;
border: none;
`;