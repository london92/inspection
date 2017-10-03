import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';

import LoginForm from './components/LoginForm';
import InspectionList from './components/InspectionList';
import InspectionCreate from './components/InspectionCreate';
import InspectionEdit from './components/InspectionEdit';

const RouterComponent = () => {
    const { headerStyle, rightButtonStyle } = styles;
    return (
        <Router titleStyle={{color: '#4A4949'}}
                navigationBarStyle={headerStyle}
                sceneStyle={{paddingTop: 75}}>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" />
            </Scene>
            <Scene key="main">
                <Scene key="inspectionList"
                       component={InspectionList}
                       rightButtonTextStyle={rightButtonStyle}
                       title="Inspections"
                       rightTitle="Add"
                       onRight={() => Actions.inspectionCreate()}/>

                <Scene key="inspectionCreate"
                       leftButtonIconStyle = {{ tintColor: '#FFF'}}
                       component={InspectionCreate}
                       title="Create Inspection"/>

                <Scene key="inspectionEdit"
                       leftButtonIconStyle = {{ tintColor: '#FFF'}}
                       component={InspectionEdit}
                       title="Edit Inspection"/>
            </Scene>
        </Router>
    )
};

const styles = StyleSheet.create({
    headerStyle: {
        marginTop: 25,
        backgroundColor: '#D5DA4D',
    },
    rightButtonStyle: {
        color: '#fff',
        marginRight: 15,
        paddingLeft: 15,
        alignItems:'center',
        borderLeftWidth: 1,
        borderLeftColor: '#e8e5cc',
        height: 26
    }
});

export default RouterComponent;