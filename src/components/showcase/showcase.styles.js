import styled from "styled-components";


export const Container = styled.div`
width: 100vw;
height: 90vh;
background: ${({theme}) => theme.color.paper};
`;

export const Wrapper = styled.div`
width: 100%;
height: 100%;
position: relative;
img{
    height: 100vh;
    width: 100%;
    object-fit: cover;
}
`;

export const Box = styled.div`
position: absolute;
top: 40vh;
right: 40vh;
text-align: center;
h2{
font-size: 4rem;
color: #fff;

span{
   
}
};

h5{
font-size: 2rem;
color: #244d4d;
};

button{
    height: 3rem;
    width: 9rem;
    border-radius: 0.4rem;
    transition: all .4s ease-in;
    font-size: 1rem;
    margin: 1rem;
    background: #244d4d;
    color: white ;
    :hover{
    background: white;
    color: #244d4d;
}
}
`;

export const ButtonGroup = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;



export const LeftBox = styled.div`
flex: 1;

h3{
color: gray;
font-size: 2rem;
};

h1{
color: #244d4d;
font-size: 5rem;
};

p{
   font-size : 1rem;
};

button{
background: #244d4d;
width: 7rem;
height: 2.5rem;
color: white;
margin-top: 1rem;


}

`

export const RightBox = styled.div`
flex: 1;
border: none;

img{
    width: 90%;
   
}
`