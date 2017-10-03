import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import { CardSection, Input} from './common';
import { inspectionUpdate } from '../actions';


class InspectionForm extends Component {

    render(){
        return(
            <View>
                <CardSection>
                    <Input label='Name'
                           placeholder='Your Name'
                           onChangeText={value => this.props.inspectionUpdate({ prop: 'name', value })}
                           value={this.props.name}/>
                </CardSection>

                <CardSection>
                    <Input label='Telephone'
                           placeholder='555-555-5555'
                           keyboardType='numeric'
                           onChangeText={value => this.props.inspectionUpdate({ prop: 'phone', value })}
                           value={this.props.phone}/>
                </CardSection>

                <CardSection>
                    <Input label='Brand'
                           placeholder='BMW'
                           onChangeText={value => this.props.inspectionUpdate({ prop: 'car', value })}
                           value={this.props.car}/>
                </CardSection>

                <CardSection>
                    <Input label='Model'
                           placeholder='M3'
                           onChangeText={value => this.props.inspectionUpdate({ prop: 'model', value })}
                           value={this.props.model}/>
                </CardSection>
            </View>
        )
    }
}

InspectionForm.propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
    car: PropTypes.string,
    model: PropTypes.string,
    inspectionUpdate: PropTypes.func,
    inspectionCreate: PropTypes.func
}

const mapStateToProps = state => {
    const { name, phone, car, model } = state.inspectionForm;

    return { name, phone, car, model }
}

export default connect(mapStateToProps, { inspectionUpdate })(InspectionForm);