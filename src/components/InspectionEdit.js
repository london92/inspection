import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Communication from 'react-native-communications';

import { Card, CardSection, Button, Confirm } from './common';
import InspectionForm from './InspectionForm';
import { inspectionUpdate, inspectionSave, inspectionDecline } from '../actions';


class InspectionEdit extends Component {

    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }
    }

    componentWillMount(){
        _.each(this.props.inspection, (value, prop) => {
            this.props.inspectionUpdate({ prop, value })
        })
    }

    _onPress(){
        const { name, phone, car } = this.props;
        this.props.inspectionSave({ name, phone, car, uid: this.props.inspection.uid })
    }

    _onTextSchedule(){
        const { phone, car } = this.props;
        Communication.text(phone, `Your car is ${car}`);
    }

    _onAccept(){
        const { uid } = this.props.inspection;
        this.props.inspectionDecline({ uid });
    }

    _onDecline(){
        this.setState({ showModal: false });
    }

    render(){
        return(
            <Card>
                <InspectionForm/>
                <CardSection>
                    <Button onPress={this._onPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this._onTextSchedule.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Decline Inspection
                    </Button>
                </CardSection>

                <Confirm visible={this.state.showModal} onAccept={this._onAccept.bind(this)} onDecline={this._onDecline.bind(this)}>
                    Are you sure you want to decline this?
                </Confirm>
            </Card>
        )
    }
}

InspectionEdit.propTypes = {
    inspection: PropTypes.object,
    inspectionUpdate: PropTypes.func,
    name: PropTypes.string,
    phone: PropTypes.string,
    car: PropTypes.string,
    inspectionSave: PropTypes.func,
    inspectionDecline: PropTypes.func
};

const mapStateToProps = state => {
    const { name, phone, car } = state.inspectionForm;
    return { name, phone, car }
};

export default connect(mapStateToProps, { inspectionUpdate, inspectionSave, inspectionDecline })(InspectionEdit);