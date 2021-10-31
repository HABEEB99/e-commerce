import React from 'react'
import { CartLogo, Container } from './cart.styles'
import toggleCart from '../../redux/cart/cart.actions'
import {connect} from 'react-redux'

const Cart = ({toggleCart}) => {
    return (
        <>
          <Container onClick={toggleCart}>
             <CartLogo/>
             <span>9</span>
          </Container>  
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCart: () => dispatch(toggleCart())
})

export default connect(null, mapDispatchToProps)(Cart);
