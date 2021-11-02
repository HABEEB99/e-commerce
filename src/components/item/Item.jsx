import React from 'react'
import {connect} from 'react-redux'
import { addItem } from '../../redux/cart/cart.actions'
import pic from '../../assets/jacket-11.jpg'
import { Container, Details, Icons, Like, LikeIcon, Cart, CartIcon } from './item.styles'

const Item = ({item, addItem }) => {
   const {name, price, description, id, imageURL} = item;
    return (
        <>
           <Container>
                
             <h3>{name}</h3>
             <img src={pic} alt={name} />
             <button>view full description</button>     
             <Details>
                 <h5>{price}</h5>
                 <Icons>
                     <Like> <LikeIcon/> </Like>
                     <Cart onClick={() => addItem(item)}> <CartIcon/> </Cart>
                 </Icons>
             </Details>
                
           </Container> 
        </>
    )
}


const mapDispatchToProps = dispatch => ({
    addItem : item => dispatch(addItem(item))
})


export default connect(null, mapDispatchToProps)(Item);
