import React from 'react'
import { Box, Box1, Box2, Box3, Container, Detail, Wrapper } from './offer.styles'
import pic1 from '../../assets/alexander-naglestad-RFhq0SrrgEg-unsplash.jpg'
import pic2 from '../../assets/revolt-164_6wVEHfI-unsplash.jpg'
import pic3 from '../../assets/dave-goudreau-st7BB69d6Kg-unsplash.jpg'




const Offers = () => {
    return (
        <>
          <Container>
             <Wrapper>
                <Box1>
                  <Box>
                     <Detail>
                       <h6>Limited Offer</h6>
                       <h4>Upto 70% off</h4>
                       <button>Shop Now</button>
                     </Detail>
                     <img src={pic1} alt="one" />
                  </Box>
                </Box1>
                <Box2>
                  <Box>
                    <Detail>
                        <h6>Limited Offer</h6>
                        <h4>Upto 70% off</h4>
                        <button>Shop Now</button>
                    </Detail>
                    <img src={pic2} alt="two" />
                  </Box>
                </Box2>
                <Box3>
                  <Box>
                    <Detail>
                        <h6>Limited Offer</h6>
                        <h4>Upto 70% off</h4>
                        <button>Shop Now</button>
                    </Detail>
                    <img src={pic3} alt="three" />
                  </Box>
                </Box3>
             </Wrapper>
          </Container>
        </>
    )
}

export default Offers
