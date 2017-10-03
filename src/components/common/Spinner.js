import React, { Component, PropTypes } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

class Spinner extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.spinerStyle}>
                <ActivityIndicator size={this.props.size || 'large'}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    spinerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

Spinner.propTypes = {
    size: PropTypes.string
};

export { Spinner };