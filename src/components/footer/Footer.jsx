import React from 'react'
import { Container, Foot, Navigations } from './footer.styles'
import Nav from './Nav'
import { withRouter } from 'react-router'
import Order from './Order'
import Socials from './Socials'
import Newsletter from './Newsletter'

const Footer = () => {
    return (
        <>
           <Container>
             <Navigations>
               <Nav/>
               <Order/>
               <Socials/>
               <Newsletter/>
             </Navigations>
             <Foot>
              <span>Created by Habeeb Ahmadu</span>
             </Foot>
           </Container> 
        </>
    )
}

export default withRouter(Footer); 
