import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 45vh;
`;

export const Navigations = styled.div`
width: 100%;
height: 40vh;
display: flex;
padding: 0 10rem;
align-items: center;
justify-content: space-between;
background: ${({theme}) => theme.color.cool};
`;

export const Foot = styled.footer`
width: 100%;
height: 5vh;
background: ${({theme}) => theme.color.primary};
text-align: center;
display: flex;
justify-content: center;
align-items: center;

span{
    font-size: 1rem;
    color: whitesmoke;
}
`;