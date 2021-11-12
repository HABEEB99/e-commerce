import React from 'react'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import StripeCheckoutButton from '../../components/stripe/StripeCheckoutButton';
import {selectCartItems, selectCartTotal}  from '../../redux/cart/cart.selectors'
import { Container,Item, Total, Title, Topbar, Warning } from './checkout.styles'

const Checkout = ({cartItems, total}) => {
    return (
        <>
           <Container>
                
                <Topbar>
                   <Title>
                      <h5>Item</h5>
                   </Title>
                   <Title>
                      <h5>Description</h5>
                   </Title>
                   <Title>
                      <h5>Quantity</h5>
                   </Title>
                   <Title>
                    <h5>Price</h5>
                   </Title>
                   <Title>
                     <h5>Remove</h5>
                   </Title>
                </Topbar>
               
                
                
                     {
                        cartItems.map(cartItem =>
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/> 
                        )
                     }

               

                <Total>
                  <h4> Total: ${total}</h4>
                </Total>
                <Warning>
                 <h4>
                  <span>NOTE:</span> For testing purpose, use the dummy data below for your credit card 
                   <br/>
                  <span>CARD NUMBER:</span> 4242 4242 4242 4242
                  <br />
                  <span>EXPIRING DATE:</span> 01/20
                  <br />
                  <span>CVV:</span> 123
                 </h4>
                </Warning>
              
           </Container> 
        </>
    )
}



const mapStateToProps = createStructuredSelector({
   cartItems : selectCartItems,
   total: selectCartTotal,
})

export default connect(mapStateToProps)(Checkout)
