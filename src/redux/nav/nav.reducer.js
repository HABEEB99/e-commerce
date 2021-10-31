import navActionTypes from "./nav.types";


const INITIAL_STATE = {
    close: true,
}


const navReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case navActionTypes.TOGGLE_NAV:
            return {
                ...state,
                close: !state.close
            }
    
        default:
            return state
            break;
    }
}

export default navReducer;