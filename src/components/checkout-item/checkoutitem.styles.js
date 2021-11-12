import styled from "styled-components";
import {MdOutlineRemoveShoppingCart} from 'react-icons/md'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'


export const Container = styled.div`
width: 80%;
display: flex;
align-items: center;
justify-content: space-between;
border-bottom: 3px solid gray;
height: 8rem;
`;

export const Image = styled.div`

img{
    width: 10rem;
    height: 7rem;
}
`;


export const Box = styled.div`
margin-right: 1rem;
text-align: center;
h4{
    margin-right: 1.5rem;
    color: white;
    font-size: 1.3rem;
}
h5{
    color: white;
    font-size: 1.3rem;
}
`;


export const Quantity = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;


export const Add = styled(AiOutlinePlus)`
 color: white;
 font-size: 2rem;
 cursor: pointer;
 transition: all 1s ease;
 margin-left: 0.4rem;
 &:hover{
     color: green;
 }
`;

export const Reduce = styled(AiOutlineMinus)`
 color: white;
 font-size: 2rem;
 cursor: pointer;
 transition: all 1s ease;
 margin-right: 0.4rem;
 &:hover{
     color: red;
 }
`;




export const Remove = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-right: 1rem;
`;

export const RemoveItem = styled(MdOutlineRemoveShoppingCart)`
text-align: center;
font-size: 2.5rem;
color: white;
cursor: pointer;
transition: all 2s ease-in-out;

 &:hover{
     color: red;
 }
`;