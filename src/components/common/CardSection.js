import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';

class CardSection extends Component {

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
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position : 'relative'
    }
});

CardSection.propTypes = {
    children: PropTypes.any.isRequired
};

export { CardSection } ;