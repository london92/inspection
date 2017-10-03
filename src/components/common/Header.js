import React, { Component, PropTypes } from 'react';
import { Text, StyleSheet, View } from 'react-native';

class Header extends Component{

    render(){
        return(
            <View style={styles.viewStyle}>
                <Text style={styles.textStyle}>{this.props.headerText}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewStyle : {
      height: 60,
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20,
      shadowOffset: {width : 0, height: 2},
      shadowColor: '#000',
      shadowOpacity: 0.2,
      position: 'relative',
      elevation: 2
    },
    textStyle: {
        fontSize: 20
    }
});

Header.propTypes ={
    headerText: PropTypes.string.isRequired
};

export { Header } ;