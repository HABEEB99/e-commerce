import styled from "styled-components";


export const Container = styled.div`
width: 100vw;
height: 50vh;
margin-top: 6rem ;
`;


export const Wrapper = styled.div`
width: 100%;
height: 100%;
padding: 0 5rem;
display: flex;
align-items: center;
justify-content: center;
background: ${({theme}) => theme.color.cool};
`;


export const Box1 = styled.div`
width: 30%;
height: 90%;
background: ${({theme}) => theme.color.cool};
`;


export const Box2 = styled.div`
width: 30%;
height: 90%;
background: ${({theme}) => theme.color.cool}
`;

export const Box3 = styled.div`
width: 30%;
height: 90%;
background: ${({theme}) => theme.color.cool}
`;

export const Box = styled.div`
width: 100%;
height: 100%;
padding: 2rem 1rem;
display: flex;
align-items: center;
justify-content: flex-end;
position: relative;

img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;

export const Detail = styled.div`

position: absolute;
right: 10rem;

h6{
font-size: 0.7rem;
color: whitesmoke;
};
h4{
font-size: 1.2rem;
margin: 0.5rem 0;
color: white;
};
button{
width: 6rem;
height: 2rem;
background: #244d4d;
color: white;
transition: all 0.3s ease;
&:hover{
background: white;
color: #244d4d;
}
};
`;