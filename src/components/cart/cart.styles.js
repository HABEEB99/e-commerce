import styled from "styled-components";
import {BsCart} from 'react-icons/bs'

export const Container = styled.div`


span{
    position: absolute;
    font-size: 0.9rem;
    right: 5.5rem;
    top: 1.2rem; 
    color: black;
    text-align: center;
}
`;

export const CartLogo = styled(BsCart)`
font-size: 2rem;
margin: 0 0.9rem;
cursor: pointer;
position: relative;

&:hover{
    color: #244d4d;
}
`;