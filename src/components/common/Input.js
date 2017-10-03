import React, { Component, PropTypes } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

class Input extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const { label, onChangeText, value, placeholder, secureTextEntry, keyboardType = 'default' } = this.props;
        const { inputStyle, labelStyle, containerStyle } = styles;

        return(
            <View style={containerStyle}>
                <Text style={labelStyle}>{label}</Text>
                <TextInput
                    keyboardType={keyboardType}
                    selectionColor='#D5DA4D'
                    underlineColorAndroid='#D5DA4D'
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    style={inputStyle}
                    onChangeText={onChangeText}
                    value={value}/>
            </View>
        )
    }
}
Input.propTypes = {
    label: PropTypes.string,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    keyboardType: PropTypes.string
};

const styles = StyleSheet.create({
    inputStyle:{
        height: 40,
        color: '#4A4949',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 15,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        flex: 1,
        paddingLeft: 20,
        color: '#4A4949'
    },
    containerStyle: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export { Input };