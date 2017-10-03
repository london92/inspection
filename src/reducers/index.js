import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import InspectionFormReducer from './InspectionFormReducer';
import InspectionsReducer from './InspectionsReducer';

export default combineReducers({
    auth: AuthReducer,
    inspectionForm: InspectionFormReducer,
    inspectionsList: InspectionsReducer
})
