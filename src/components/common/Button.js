import React, { Component, PropTypes } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


class Button extends Component {
    constructor(props){
        super(props)
    }

    render(){

        const { buttonContainer, textContainer } = styles;
        const { onPress, children } = this.props;

        return(
            <TouchableOpacity onPress={onPress} style={buttonContainer}>
                <Text style={textContainer}>{children}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderColor: '#8f9310',
        borderRadius: 5,
        borderWidth: 1,
        marginRight: 5,
        marginLeft: 5
    },
    textContainer: {
        alignSelf: 'center',
        color : '#8f9310',
        fontWeight: '600',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    }
});

Button.propTypes ={
    onPress: PropTypes.func,
    children: PropTypes.any.isRequired
};

export  { Button };