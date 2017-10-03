import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Card, CardSection, Button } from './common';
import { inspectionUpdate, inspectionCreate, clearInspection } from '../actions';
import InspectionForm from './InspectionForm';

class InspectionCreate extends Component {

    componentWillMount(){
        this.props.clearInspection();
    }

    _onPress(){
        const { name, phone, car, model } = this.props;
        this.props.inspectionCreate({ name, phone, car, model })
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