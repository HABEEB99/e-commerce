import React from 'react'
import { Box, ButtonGroup, Container, LeftBox, RightBox, Wrapper } from './showcase.styles'
import { Button } from '@material-ui/core'
import Pic from "../../assets/banner.jpg"



const Showcase = () => {
    return (
        <>
           <Container>
               <Wrapper>
                 <img src={Pic} alt="showcase pic" />
                 <Box>
                     <h2><span>Welcome to</span> HABEEB-STORE</h2>
                     <h5>Get quality items at an affordable prices</h5>
                     <ButtonGroup>
                       <button>Shop Men</button>
                       <button>Shop Women</button>
                     </ButtonGroup>
                 </Box>
               </Wrapper>
           </Container> 
        </>
    )
}

export default Showcase
