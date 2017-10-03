import {INSPECTION_UPDATE, INSPECTION_CREATE, INSPECTION_SAVED_SUCCESS, CLEAR_INSPECTION} from '../actions/types';

const INITIAL_STATE = {name: '', phone: '', car: '', model: ''};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case CLEAR_INSPECTION:
            return INITIAL_STATE;
        case INSPECTION_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        case INSPECTION_CREATE:
            return INITIAL_STATE;
        case INSPECTION_SAVED_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
}