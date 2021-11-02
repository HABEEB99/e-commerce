import React from 'react'
import { Container, Divider, Title, Topbar } from './checkout.styles'

const Checkout = () => {
    return (
        <>
           <Container>
                
                <Topbar>
                   <Title>
                      <h5>ITEM</h5>
                   </Title>
                   <Title>
                      <h5>DESCRIPTION</h5>
                   </Title>
                   <Title>
                      <h5>PRICE</h5>
                   </Title>
                   <Title>
                    <h5>TOTAL</h5>
                   </Title>
                   <Title>
                     <h5>REMOVE</h5>
                   </Title>
                </Topbar>
                <Divider/>
           </Container> 
        </>
    )
}

export default Checkout
