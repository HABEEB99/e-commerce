import React from 'react'
import { Route } from 'react-router';
import ShopCollections from '../../components/shop-collections/ShopCollections';
import CollectionsCategory from '../shop-collections-category/CollectionsCategory';
import { Container, Wrapper,} from './shop.styles'




const Shop = ({match}) => {
    return (
        <>
           <Container>
              <h1>Collection Preview</h1>
              <Wrapper>
                <Route exact path={`${match.path}`} component={ShopCollections}/>
                <Route exact path={`${match.path}/:categoryId`} component={CollectionsCategory}/>
              </Wrapper>
           </Container>
        </>
    )
}




export default Shop;
