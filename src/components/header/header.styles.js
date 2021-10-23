import styled from "styled-components";
import {ImSearch} from 'react-icons/im'
import {BsFillPersonFill,  BsCart4} from 'react-icons/bs'
import {BiHeart,} from 'react-icons/bi'
import {FaTimes} from 'react-icons/fa'
import {GoThreeBars} from 'react-icons/go'
import { NavLink } from "react-router-dom";

export const Container = styled.div`
height: 4rem;
width: 100vw;
padding: 1rem 3rem;
display: flex;
z-index: 1;
align-items: center;
justify-content: space-between;
background-color: ${({theme}) => theme.color.cool };
`;

export const Brand = styled.div`

h3{
    font-size: 1.5rem;
    color: #244d4d;
}
`;


export const SearchBar = styled.div`
height: 2.5rem;
width: 40rem;
display: flex;
align-items: center;
border: 2px solid  ${({theme}) => theme.color.primary};
border-radius: 3em;
`;


export const Input = styled.input`
flex: 9;
background: transparent;
border:  ${({theme}) => theme.color.primary};
width: 100%;
height: 100%;
border-radius: 3em;
font-size: 1rem;
position: relative;
`;

export const SearchIcon = styled(ImSearch)`
flex: 1;
color: ${({theme}) => theme.color.primary};
font-size: 1.5rem;
position: absolute;
top: 1.2rem;
right: 30rem;
`;

export const NavIcons = styled.div`
display: flex;
align-items: center;
color: gray;
`;

export const User = styled(BsFillPersonFill)`
font-size: 2rem;
cursor: pointer;

&:hover{
    color: #244d4d;
}
`;


export const Cart = styled(BsCart4)`
font-size: 2rem;
margin: 0 0.9rem;
cursor: pointer;

&:hover{
    color: #244d4d;
}
`;

export const Like = styled(BiHeart)`
font-size: 2rem;
margin-left: 0.9rem;
cursor: pointer;

&:hover{
    color: #244d4d;
}
`;

export const Nav = styled(GoThreeBars)`
font-size: 2rem;
cursor: pointer;

&:hover{
    color: #244d4d;
}
`;


export const Navigation = styled.div`
display: flex;
flex-direction: column;
z-index: 10;
background: #244d4d;
width: 25vw;
height: 60vh;
top: 4rem;
right: 0rem;
position: absolute;
transition: all 0.2s ease-in-out;
/* opacity: 0.6; */
display: ${({nav}) => nav ? null : "none"};
`;

export const CloseBar = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
`;

export const Close = styled(FaTimes)`
font-size: 2rem;
cursor: pointer;
color: white;
&:hover{
    color: red;
}
`;


export const SideNav = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const Link = styled(NavLink)`
color: white;
font-size: 2rem;
margin-top: 1rem;
text-align: center;
width: 100%;
transition: all 0.3 ease;
&:hover{
    background: gray;

}
`;

export const SignIn = styled.div`
display: flex;
flex-direction: column;
z-index: 10;
background: #244d4d;
width: 25vw;
height: 60vh;
top: 4rem;
right: 0rem;
position: absolute;
transition: all 0.2s ease-in-out;
/* opacity: 0.6; */
display: ${({form}) => form ? null : "none"};

`;

export const FormWrapper = styled.div`
display: flex;
flex-direction: column;
padding: 2rem 2rem;
margin: 3rem 2rem;
border: 2px solid white;

h2{
    margin-bottom: 1rem;
    color: whitesmoke;
    font-size: 2rem;
}

h5{
    font-size: 0.7rem;
    color: white;
    margin-top: 1rem;
}

a{
    color: orangered;
}
`;


export const Form = styled.form`


input{
    width: 100%;
    font-size: 1rem;
    margin-bottom: 1rem;

    &input[checkbox] {
        width: 30%;
    }

    h3{
        text-align: center;
        color: red;
    }
}
`;

export const CheckBoxWrapper = styled.div`
display: flex;
label{
   
    color: whitesmoke;
    text-align: center;
    margin-left: 0.4rem;
    
}
input{
    width: 5%;
}
`;

export const ButtonWrapper = styled.div`
display: flex;
justify-content: space-between;
button{
    
    width: 8rem;
    height: 1.7rem;

    

    &:nth-child(1){
        background-color: blue;
        color: white;

        &:hover{
        background-color: white;
        color: #244d4d;
    }
    };
    
    &:nth-child(2){
        background-color: red;
        color: white;

        &:hover{
        background-color: white;
        color: #244d4d;
    }
    }
}
`;