import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Container } from './StripeCheckoutButton.styles';

const StripeCheckoutButton = ({price}) => {
    const onToken = token => {
        alert("YOUR PAYMENT WAS SUCCESSFUL!")
    }
    const stripePrice = price * 100;
    const stripePublishableKey = "pk_test_51JsP7gBZBk3LjA4av63StrVCiRr7nAYi1xAC5MnM9TLGXPHzpKyTJnrP3WiHX2Knias0CwJejkpGn4KjFyAiZRGl00phuNLgry"
    return (
        <>
           <Container>
                <StripeCheckout
                label= "PAY NOW"
                name= "HABEEB-STORE"
                billingAddress
                bitcoin
                shippingAddress
                description= {`Your total bill is $${price}`}
                amount= {stripePrice}
                panelLabel= "Pay Now"
                token= {onToken}
                stripeKey= {stripePublishableKey}
                /> 
           </Container>
        </>
    )
}

export default StripeCheckoutButton
