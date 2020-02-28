import React, { useState } from 'react';
import axios from 'axios';
import { Text, View, TextInput, Image, TouchableHighlight } from 'react-native';
import Flow from '../assets/flow.png';
import call from '../global/api/endpoints';
import Styles from '../style/LoginStyle';

function Login(props) {
  const [value, updateValue] = useState({
    username: '',
    password: ''
  });
  const { navigate } = props.navigation;

  function handleLogin(text, field) {
    if (field === 'username') {
      updateValue({
        ...value,
        username: text
      });
    } else if (field === 'password') {
      updateValue({
        ...value,
        password: text
      });
    }
  }

  function submit(e) {
    e.preventDefault();

    axios
      .post(call.LOGIN(), value)
      .then(response => {
        navigate('Firstpage');
      })
      .catch(error => {
        console.warn(error);
      });
  }

  return (
    <View style={Styles.container}>
      <Image style={Styles.container__flowImg} source={Flow} />
      <View style={Styles.welcomeContainer}>
        <Text style={Styles.welcomeContainer__text__big}>Hello there, </Text>
        <Text style={Styles.welcomeContainer__text}>
          sign in or create a new account.
        </Text>
      </View>
      <View>
        <TextInput
          style={Styles.textinput}
          placeholder='Username'
          onChangeText={text => handleLogin(text, 'username')}
        />
        <TextInput
          style={Styles.textinput}
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={text => handleLogin(text, 'password')}
        />
      </View>
      <TouchableHighlight
        style={Styles.signin__button}
        onPress={e => submit(e)}
      >
        <Text style={Styles.signin__button__text}>SIGN IN</Text>
      </TouchableHighlight>
      <View style={Styles.signupContainer}>
        <Text style={Styles.signupContainer__text}>New here? </Text>
        <TouchableHighlight
          style={Styles.register__button}
          onPress={() => navigate('Register')}
        >
          <Text style={Styles.register__button__text}>Sign up instead</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default Login;
