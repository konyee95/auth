import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyCMZqPhqGfoIie4gMvSkdx8_IhtUEMaVHs',
            authDomain: 'authentication-68985.firebaseapp.com',
            databaseURL: 'https://authentication-68985.firebaseio.com',
            projectId: 'authentication-68985',
            storageBucket: 'authentication-68985.appspot.com',
            messagingSenderId: '924081389928'
          });
    }

    render(){
        return(
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
};

export default App;