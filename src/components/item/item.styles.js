import styled from "styled-components";
import { FaCartPlus } from 'react-icons/fa';
import {FcLike} from 'react-icons/fc'



export const Container = styled.div`
width: 100%;
height: 100%;
margin-top: 1rem;

position: relative;
h3{
    text-align: center;
    color: gray;
    font-style: italic;
}

img{
    height: 16rem;
    width: 22rem;
    

    &:hover{
        opacity: 0.8;
    }
}

button{
        width: 18rem;
        height: 2rem;
        margin-left: -20rem;
        top: 14rem;
        position: absolute;
        color: white;
        background-color: black;
        opacity: 0.7;
        transition: all 0.2s ease;

        &:hover{
            color: black;
            background-color: white;
        }
    }



`;

export const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;


h5{
    font-size: 1rem;
    color: gray;
}
`;

export const Description = styled.div`

`;

export const Icons = styled.div`
display: flex;
align-items: center;
cursor: pointer;
`;

export const Like = styled.div`

`;

export const Cart = styled.div`

`;


export const LikeIcon = styled(FcLike)`
font-size: 1.4rem;
color: gray;
margin-right: 0.4rem;
`;


export const CartIcon = styled(FaCartPlus)`
font-size: 1.4rem;
color: gray;

&:hover{
    color: black;
}
`;

