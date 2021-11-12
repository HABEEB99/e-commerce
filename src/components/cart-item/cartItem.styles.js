import styled from "styled-components";


export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 6rem;
margin: 10% 5%;
`;

export const Image = styled.div`
width: 10rem;
height: 7rem;

img{
    width: 100%;
    height: 100%;
}
`;


export const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

span{
    font-size: 1.2rem;
    color: white;
    text-align: center;
}
`;