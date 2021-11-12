import React from 'react'
import { Add, Box, Container, Image, Quantity, Reduce, Remove, RemoveItem } from './checkoutitem.styles'
import { removeCartItem, addItem, decreaseItem } from '../../redux/cart/cart.actions'
import { connect } from 'react-redux'




const CheckoutItem = ({cartItem, removeItem, addItem, decreaseItem}) => {

    const {name, imageURL, price, quantity} = cartItem;

    return (
        <>
           <Container>
                <Image> <img src={imageURL} alt="item-pic" /> </Image>
                <Box> <h5>{name}</h5> </Box>
                <Quantity>
                    <Box onClick={() => decreaseItem(cartItem)}> <Reduce/> </Box>
                    <Box> <h5>{quantity}</h5> </Box>
                    <Box  onClick={() => addItem(cartItem)}> <Add/> </Box>
                </Quantity>
                <Box> <h4>{price}</h4> </Box>
                <Remove onClick={() => removeItem(cartItem)}>
                   <RemoveItem/>
                </Remove>
           </Container> 
        </>
    )
}


const mapDispatchToProps = dispatch => ({
    removeItem : (item) => dispatch(removeCartItem(item)),
    addItem : item => dispatch(addItem(item)),
    decreaseItem : item => dispatch(decreaseItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem)
