import React from 'react'
import { Box, Container, Image } from './cartItem.styles'

const cartItem = ({item: {imageURL, price, name, quantity}}) => {
    return (
        <>
          <Container>
              <Image>
                 <img src={imageURL} alt="pic" />
              </Image>
              <Box>
                 <span> {name} </span>
                 <span> {quantity} x ${price} </span>
              </Box>
          </Container>  
        </>
    )
}

export default cartItem
