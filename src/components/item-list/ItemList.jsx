import React from 'react'
import { Container, Wrapper, Box, Details, Description, Icons, Like, Cart, CartIcon, LikeIcon } from './itemList.styles';
import pic from '../../assets/jacket-11.jpg'
import Item from '../item/Item';

const ItemList = ({items}) => {
    return (
        <>
          <Container>
             {items.filter((item, idx) => idx < 4).map(item => {
                 return(
                     <Wrapper key={item.id}>
                       <Item item={item} />
                     </Wrapper>
                 )
             })}
          </Container>  
        </>
    )
}

export default ItemList
