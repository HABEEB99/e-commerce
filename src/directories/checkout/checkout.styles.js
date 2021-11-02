import styled from "styled-components";



export const Container = styled.div`
width: 100%;
height: 90vh;
background-color: ${({theme}) => theme.color.primary};
`;

export const Topbar = styled.div`
width: 100%;
height: 100%;
padding: 1% 15%;
display: flex;
align-items: center;
justify-content: space-between;

`;

export const Divider = styled.div`

`;


export const Title = styled.div`


h5{
    color: white;
    font-size: 1.5rem;
    font-style: italic;
}
`;