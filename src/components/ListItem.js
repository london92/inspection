import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardSection } from './common';

class ListItem extends Component {

    _onPress(){
        Actions.inspectionEdit({ inspection: this.props.inspection});
    }

    render(){
        const { car, model, name } = this.props.inspection;
        return(
            <TouchableHighlight onPress={this._onPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>{`${car} - ${model} - ${name}`}</Text>
                    </CardSection>
                </View>
            </TouchableHighlight>
        )
    }
}

ListItem.propsTypes = {
    inspection: PropTypes.object
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
});

export default ListItem;