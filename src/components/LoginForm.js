import React, { Component, PropTypes } from 'react';
import { Text, Image, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner }  from './common';

class LoginForm extends Component {

    _onEmailChanged(text){
        this.props.emailChanged(text);
    }

    _onPasswordChange(password){
        this.props.passwordChanged(password);
    }

    _onPress(){
        const { email, password } = this.props;
        this.props.loginUser({email, password});
    }

    _renderButton(){
        if(this.props.loading){
            return <Spinner size={'large'}/>
        }
        return (
            <Button onPress={this._onPress.bind(this)}>Login</Button>
        )
    }

    render(){
        const { logoStyle, containerStyle } = styles;

        return(
            <ScrollView style={containerStyle}>
                <Image
                    style={logoStyle}
                    source={require('../assets/img/images.jpg')}
                />
                <Card>
                    <CardSection>
                        <Input label='Email'
                               placeholder='enter your email'
                               onChangeText={this._onEmailChanged.bind(this)}
                               keyboardType='email-address'
                               value={this.props.email}/>
                    </CardSection>

                    <CardSection>
                        <Input label='Password' placeholder='enter your password' secureTextEntry={true}
                               onChangeText={this._onPasswordChange.bind(this)} value={this.props.password}/>
                    </CardSection>

                    <Text style={{color: 'red', fontSize: 20, alignSelf: 'center'}}>{this.props.error}</Text>

                    <CardSection>
                        {this._renderButton()}
                    </CardSection>
                </Card>
            </ScrollView>
        )
    }
}

LoginForm.propTypes = {
    email: PropTypes.string,
    emailChanged: PropTypes.func,
    password: PropTypes.string,
    passwordChanged: PropTypes.func,
    loginUser: PropTypes.func,
    error: PropTypes.string,
    loading: PropTypes.bool
};

const styles = StyleSheet.create({
    logoStyle:{
        alignSelf: 'center',
        width: 100,
        height: 100,
        marginBottom: 20
    },
    containerStyle: {
        marginTop: 40
    }
});

const mapStateToProps = state => {
    const { email, password, error, loading } = state.auth;
    return {
        email: email,
        password: password,
        error: error,
        loading: loading
    }
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);