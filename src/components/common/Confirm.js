import React, { PropTypes } from 'react';
import { View, Modal, Text, StyleSheet } from 'react-native';

import { Card, Button } from './';
import {CardSection} from "./CardSection";

const Confirm = ({ children, visible, onAccept, onDecline }) => {

    const { textStyle, containerStyle, cardSectionStyle } = styles;

    return(
        <Modal
            animationType="slide"
            onRequestClose={() => {}}
            transparent
            visible={visible}>
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </CardSection>

                <CardSection>
                    <Button onPress={onAccept}>
                        Yes
                    </Button>
                    <Button onPress={onDecline}>
                        No
                    </Button>
                </CardSection>
            </View>
        </Modal>
    )
};

Confirm.propTypes = {
    children: PropTypes.any.isRequired,
    visible: PropTypes.bool.isRequired,
    onAccept: PropTypes.func.isRequired,
    onDecline: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
})

export { Confirm };

