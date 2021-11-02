import React from 'react'
import { Box, Container } from './cartItem.styles'

const cartItem = ({item: {imageURL, price, name, quantity}}) => {
    return (
        <>
          <Container>
              <img src={imageURL} alt="pic" />
              <Box>
                 <span> {name} </span>
                 <span> {quantity} x ${price} </span>
              </Box>
          </Container>  
        </>
    )
}

export default cartItem
