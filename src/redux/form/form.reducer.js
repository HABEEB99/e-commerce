import formActionTypes from "./form.type";


const INITIAL_STATE = {
    isHidden: true,
}

const formReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case formActionTypes.TOGGLE_FORM:
            return {
                ...state,
                isHidden: !state.isHidden
            }
            break;
    
        default:
            return  state;
            break;
    }
};


export default formReducer;