import React from 'react'
import {connect} from 'react-redux'
import CartItem from '../components/cart-item/CartItem'
import { selectCartItems } from '../redux/cart/cart.selectors'
import { Container, Box, Button, ButtonWrapper} from './cartDropdown.styles'
import { withRouter, useHistory } from 'react-router'

const CartDropdown = ({cartItems, }) => {
    const history = useHistory();
    return (
        <>
           <Container>
             {
                 cartItems.length ? (
                    <>
                      <ButtonWrapper>
                        <Button onClick={() => history.push('/checkout')}>Go To Checkout</Button>
                      </ButtonWrapper>
                      <Box>
                         {cartItems.map( item => <CartItem key={item.id} item={item}/>)}
                      </Box> 
                    </>
                 )
                 : ( <h4>There's no item in the Cart</h4> )
             }
             
           </Container> 
        </>
    )
}


const mapStateToProps = state => ({
cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
