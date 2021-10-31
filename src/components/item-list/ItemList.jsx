import React from 'react'
import { Container, Wrapper, Box, Details, Description, Icons, Like, Cart } from './itemList.styles';
import { FaCartPlus } from 'react-icons/fa';
import {FcLike} from 'react-icons/fc'

const ItemList = ({items}) => {
    return (
        <>
          <Container>
             {items.map(({id, name, price, imageURL, description}) => {
                 return(
                     <Wrapper key={id}>
                       <Box>
                           <h3>{name}</h3>
                           <img src={imageURL} alt={name} />
                           <Details>
                               {price}
                               <Icons>
                                    <Like> <FcLike/> </Like>
                                    <Cart> <FaCartPlus/> </Cart>
                               </Icons>
                           </Details>
                       </Box>
                       <Description>{description}</Description>
                     </Wrapper>
                 )
             })}
          </Container>  
        </>
    )
}

export default ItemList
