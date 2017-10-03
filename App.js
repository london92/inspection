import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './src/Router';

import reducers from './src/reducers';

class App extends Component {

    componentWillMount(){
        const config = {
            apiKey: "AIzaSyC9ZAY-8rk2Prg3oZJO5dcJqxtZ_bB3CkM",
            authDomain: "manager-f9618.firebaseapp.com",
            databaseURL: "https://manager-f9618.firebaseio.com",
            projectId: "manager-f9618",
            storageBucket: "",
            messagingSenderId: "552595436829"
        };
        firebase.initializeApp(config);
    }

    render(){
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
               <Router/>
            </Provider>
        )
    }
}

export default App;