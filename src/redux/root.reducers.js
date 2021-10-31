import { combineReducers } from "redux";

import userReducer from "./user/user.reducers";
import cartReducer from "./cart/cart.reducers";
import navReducer from "./nav/nav.reducer";
import formReducer from "./form/form.reducer";



export default combineReducers({
    user: userReducer,
    cart: cartReducer,
    nav: navReducer,
    form: formReducer
})