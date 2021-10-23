import React from 'react'
import styled from 'styled-components'
import { orderLinks } from './footer.db';
import {AiOutlineArrowRight} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';

const Container = styled.div`
height: 90%;
display: flex;
flex-direction: column;


h2{
    color: #244d4d;
}
`;

const Box = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;
width: 5rem;
margin-top: 0.5rem;
transition: all 0.5secs ease;

`;

const Link = styled(NavLink)`
font-size: 1.2rem;
margin-left: 0.3rem;
color: gray;

&:hover{
    color: #244d4d;
}
`;

const Arrow = styled.div`
display: flex;
align-items: center;
/* justify-content: flex-start; */
`;

const RightArrow = styled(AiOutlineArrowRight)`
font-size: 1rem;
font-weight: 600;
text-align: center;
color: #244d4d;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
margin-top: 1rem;
`;

const Order = () => {
    return (
        <>
          <Container>
             <h2>Extra Links</h2>
             <Wrapper>
             {orderLinks.map(item => {
                return(
                    <Box key={item.id}>
                        <Arrow><RightArrow/></Arrow>
                        <ul>
                            <li>
                                <Link  to={item.path}>
                                    {item.name}
                                </Link>
                            </li>
                        </ul>
                    </Box>
                )
            })}
             </Wrapper>
          </Container>
        </>
    )
}



export default Order
