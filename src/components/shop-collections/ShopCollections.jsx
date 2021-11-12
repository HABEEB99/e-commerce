import React from 'react'
import { NavLink } from 'react-router-dom';
import ItemList from '../../components/item-list/ItemList';
import { Box, ItemBox } from './shopCollections.styles';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopData } from '../../redux/shop/shop.selectors';

const ShopCollections = ({shopData}) => {
    return (
        <>
        {shopData.map(({id, title, path, items}) => {
            return(
                <Box key={id}>
                    <h2>{title}</h2>
                    <ItemBox>
                       <ItemList items={items}/>
                    </ItemBox>
                    <NavLink to={path}> View More Items </NavLink>
                </Box>
            )
        })}
        </>
    )
}


const mapStateToProps = createStructuredSelector({
    shopData: selectShopData
})


export default connect(mapStateToProps)(ShopCollections);
