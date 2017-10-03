import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
    INSPECTION_UPDATE,
    INSPECTION_CREATE,
    INSPECTIONS_FETCH_SUCCESS,
    INSPECTION_SAVED_SUCCESS,
    CLEAR_INSPECTION
    } from './types';

export const clearInspection = () => {
    return {
        type: CLEAR_INSPECTION
    }
};

export const inspectionUpdate = ({ prop, value }) => {
    return {
        type: INSPECTION_UPDATE,
        payload: { prop, value }
    }
};

export const inspectionCreate = ({ name, phone, car, model }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/inspections`).push({ name, phone, car, model })
            .then(() => {
            dispatch({ type: INSPECTION_CREATE });
            Actions.inspectionList({ type: 'reset' })
            });
    }
};

export const inspectionsFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/inspections`).on('value', snapshot => {
        dispatch({
            type: INSPECTIONS_FETCH_SUCCESS,
            payload: snapshot.val()
        })
    })
  }
};

export const inspectionSave = ({ name, phone, car, uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/inspections/${uid}`).set({ name, phone, car })
            .then(() => {
                dispatch({ type: INSPECTION_SAVED_SUCCESS });
                Actions.inspectionList({ type: 'reset' })
            })
    }
};

export const inspectionDecline = ({ uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/inspections/${uid}`).remove()
            .then(() => {
                dispatch({ type: INSPECTION_SAVED_SUCCESS });
                Actions.inspectionList({ type: 'reset' })
            })
    }
}