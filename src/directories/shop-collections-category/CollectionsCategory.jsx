import React from 'react'
import { Box, Container, Title } from './collectionsCategory.styles'
import { selectCategoryId } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import Item from '../../components/item/Item';

const CollectionsCategory = ({category}) => {
    
    const {title, items} = category;

    return (
        <>
           <Container>
               <Title><h2>{title}</h2></Title>
               <Box>
                 {
                     items.map(item => <Item key={item.id} item={item}/>)
                 }
               </Box>
           </Container> 
        </>
    )
}

const mapStateToProps = (state, props) => ({
    category: selectCategoryId(props.match.params.categoryId)
})

export default  connect(mapStateToProps)(CollectionsCategory)
