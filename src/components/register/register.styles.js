import styled from "styled-components";


export const Container = styled.div`
width: 60%;
height: 60%;
border: 4px solid gray;
`;


export const FormWrapper = styled.div`
width: 100%;
height: 100%;
padding: 5rem;
border: 2px solid white;
display: flex;
flex-direction: column;
justify-content: center;
h1{
    font-size: 2rem;
    color: white;
    margin-bottom: 1.5rem;
}
`;

export const Form = styled.form`


h4{
    color: red;
    font-style: italic;
    font-size: 0.7rem;
}

button{
    width: 9rem;
    height: 2.5rem;
    background-color: #244d4d;
    color: white;
    text-align: center;

    &:hover{
        background-color:white;
        color: #244d4d;
    }
}
`;

export const InputWrapper = styled.div`
font-size: 1rem;
color: gray;
margin-bottom: 1.5rem;
input{
    width: 100%;
    height: 2rem;
    background-color: white;
    color: #244d4d;
}
`;