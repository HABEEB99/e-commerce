import styled from "styled-components";



export const Container = styled.div`
width: 100vw;
height: 90vh;
background-color: ${({theme}) => theme.color.primary};
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
overflow: scroll;
`;

export const Topbar = styled.div`
width: 80%;
height: 2rem;
margin-top: 2rem;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 3px solid gray;
`;


export const Item = styled.div`
/* display: flex;
flex-direction: column;
width: 100%;
align-items: center;
justify-content: center; */

`;



export const Total = styled.div`


h4{
    color: yellow;
    font-size: 3rem;
}
`;


export const Title = styled.div`


h5{
    color: gray;
    font-size: 1.5rem;
    font-style: italic;

}

 
`;


export const Warning = styled.div`
h4{
    color: red;
    font-size: 1.5rem;
    
    span{
        color: white;
    }
}
`;