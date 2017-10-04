import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Card, CardSection, Button } from './common';
import { inspectionUpdate, inspectionCreate, clearInspection } from '../actions';
import InspectionForm from './InspectionForm';

class InspectionCreate extends Component {

    componentWillMount(){
        this.props.clearInspection();
    }

    _validate( { name, phone, car, model } ){
        let response = { valid: false, message: ''};

        if( name.length == 0 )
            response.message = response.message + 'Fill Name field! ';
        if( phone.length == 0 )
            response.message = response.message + 'Fill Telephone field! ';
        if( car.length == 0 )
            response.message = response.message + 'Fill Brand field! ';
        if( model.length == 0 )
            response.message = response.message + 'Fill Model field! ';
        if(response.message.length == 0 )
            response.valid = true;

        return response;
    }

    _onPress(){
        const { name, phone, car, model } = this.props;
        let validation = this._validate( { name, phone, car, model } );

        if(validation.valid){
            this.props.inspectionCreate({ name, phone, car, model })
        }
        else {
            Alert.alert('Validation Error!', validation.message,[
                {text: 'OK', onPress: () => true},
                {text: 'Quit', onPress: () => Actions.inspectionList(), style: 'cancel'}
            ],{cancelable: false})
        }

    }

    render(){
        return(
            <Card>
                <InspectionForm { ...this.props }/>
                <CardSection>
                    <Button onPress={this._onPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

InspectionCreate.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    car: PropTypes.string,
    model: PropTypes.string,
    inspectionUpdate: PropTypes.func,
    inspectionCreate: PropTypes.func,
    clearInspection: PropTypes.func
}

const mapStateToProps = state => {
    const { name, phone, car, model } = state.inspectionForm;
    return { name, phone, car, model }
};

export default connect(mapStateToProps, { inspectionUpdate, inspectionCreate, clearInspection })(InspectionCreate);
