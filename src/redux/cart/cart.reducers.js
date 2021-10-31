import cartActionTypes from "./cart.type";


const INITIAL_STATE = {
    hidden : true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.T0GGLE_CART:
            return{
                ...state,
                hidden: !state.hidden
            }
            
    
        default:
            return state;
            
    }
};

export default cartReducer;