import cartActionTypes from "./cart.type";


const toggleCart = () => ({
    type: cartActionTypes.T0GGLE_CART,
})


export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item,
})


export const decreaseItem = item => ({
    type: cartActionTypes.DECREASE_ITEM,
    payload: item,
})


export const removeCartItem = item => ({
    type: cartActionTypes.REMOVE_CART_ITEM,
    payload: item
})

export default toggleCart;