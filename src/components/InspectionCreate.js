import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';

import { Card, CardSection, Input, Button } from './common';
import { inspectionUpdate,inspectionCreate } from '../actions';
import InspectionForm from './InspectionForm';

class InspectionCreate extends Component {

    _onPress(){
        const { name, phone, car } = this.props;
        this.props.inspectionCreate({ name, phone, car })
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
    inspectionUpdate: PropTypes.func,
    inspectionCreate: PropTypes.func
}

const mapStateToProps = state => {
    const { name, phone, car } = state.inspectionForm;
    return {
        name: name,
        phone: phone,
        car: car
    }
};

export default connect(mapStateToProps, { inspectionUpdate, inspectionCreate })(InspectionCreate);