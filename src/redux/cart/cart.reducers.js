import cartActionTypes from "./cart.type";
import { addItemToCart, decreaseItem } from "./cart.utils";

const INITIAL_STATE = {
    hidden : true,
    cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.T0GGLE_CART:
            return{
                ...state,
                hidden: !state.hidden
            };
        
        case cartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems : addItemToCart(state.cartItems, action.payload)
            };
        
        case cartActionTypes.DECREASE_ITEM:
            return{
                ...state,
                cartItems: decreaseItem(state.cartItems, action.payload)
            }
        
        case cartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                  cartItem => cartItem.id !== action.payload.id  
                )
            }
            
    
        default:
            return state;
            
    }
};

export default cartReducer;