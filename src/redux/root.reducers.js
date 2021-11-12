import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducers";
import cartReducer from "./cart/cart.reducers";
import navReducer from "./nav/nav.reducer";
import formReducer from "./form/form.reducer";
import shopReducer from "./shop/shop.reducer";


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"]
}


const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    nav: navReducer,
    form: formReducer,
    shop: shopReducer
});


export default persistReducer(persistConfig, rootReducer);