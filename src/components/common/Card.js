import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';

class Card extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        return(
            <View style={styles.containerStyle}>
                {this.props.children}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor : '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
});

Card.propTypes = {
    children: PropTypes.any
};

export { Card } ;