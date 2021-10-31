import React from 'react'
import { Container, Wrapper, Box, ItemBox } from './shop.styles'
import { shopData } from './shop.data'
import { NavLink } from 'react-router-dom'
import ItemList from '../../components/item-list/ItemList'

const Shop = () => {
    return (
        <>
           <Container>
              <Wrapper>
                 {shopData.map(({id, title, path, items}) => {
                     return(
                         <Box key={id}>
                             <h1>{title}</h1>
                             <ItemBox>
                                <ItemList items={items}/>
                             </ItemBox>
                             <NavLink to={path}> View More Items </NavLink>
                         </Box>
                     )
                 })}
              </Wrapper>
           </Container>
        </>
    )
}

export default Shop
