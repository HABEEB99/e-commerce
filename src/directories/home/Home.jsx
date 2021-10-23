import React from 'react'
import Offers from '../../components/offers/Offers'
import Showcase from '../../components/showcase/Showcase'
import { Container } from './home.styles'

const Home = () => {
    return (
        <>
           <Container>
             <Showcase/>
             <Offers/>
           </Container>   
        </>
    )
}

export default Home
