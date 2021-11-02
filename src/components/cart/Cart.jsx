import React from 'react'
import { CartLogo, Container } from './cart.styles'
import toggleCart from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import {connect} from 'react-redux'

const Cart = ({toggleCart, itemCount}) => {
    return (
        <>
          <Container onClick={toggleCart}>
             <CartLogo/>
             <span>{itemCount}</span>
          </Container>  
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
