import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
height: 90%;
display: flex;
flex-direction: column;

h2{
    color: #244d4d;
};
p{
    color: gray;
    margin-top: 1rem;
    font-size: 0.8rem;
};
input{
    width: 14rem;
    height: 2.4rem;
    border: 1px solid #244d4d;
    margin: 1rem 0;
};
button{
    color: white;
    background: #244d4d;
    width: 8rem;
    height: 1.7rem;
    transition: all 0.5s ease;

    &:hover{
        color: #244d4d;
        background: white;
    }
};
`;

const Newsletter = () => {
    return (
        <>
          <Container>
             <h2>Newsletter</h2>
             <p>Subscribe For Latest Updates</p>
             <input type="text" placeholder="enter your email"/>
             <button>Subscribe</button>
          </Container>
        </>
    )
}

export default Newsletter
