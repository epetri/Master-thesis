import React, { useState } from 'react';
import axios from 'axios';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import Flow from '../assets/flow.png';
import { TextInput } from 'react-native-gesture-handler';
import call from '../global/api/endpoints';
import Styles from '../style/RegisterStyle';

function Startpage(props) {
  const [errorMsg, updateErrorMsg] = useState('');
  const [value, updateValue] = useState({
    username: '',
    password: ''
  });
  const { navigate } = props.navigation;

  function handleRegistration(text, field) {
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
    } else if (field === 'passwordRep') {
      if (!text === value.password) {
        updateErrorMsg('Please make sure your password match');
      }
    }
  }

  function submitForm(e) {
    e.preventDefault();
    console.warn(value);
    if (!errorMsg === '') {
      return;
    } else {
      axios
        .post(call.REGISTER(), value)
        .then(response => {
          console.warn(response.data);

          navigate('Firstpage');
        })
        .catch(error => {
          console.warn(error);
        });
    }
  }
  return (
    <View style={Styles.container}>
      <Image style={Styles.container__flowImg} source={Flow} />
      <View
        style={{ width: '100%', alignItems: 'flex-start', paddingLeft: 25 }}
      >
        <Text style={Styles.welcomeText__big}>Let's get moving!</Text>
        <Text style={Styles.welcomeText}>Create an account to continue</Text>
      </View>
      <View>
        <TextInput
          style={Styles.textinput}
          placeholder='Username'
          onChangeText={text => handleRegistration(text, 'username')}
        />
        <TextInput
          style={Styles.textinput}
          placeholder='Password'
          secureTextEntry={true}
          onChangeText={text => handleRegistration(text, 'password')}
        />
        <TextInput
          style={Styles.textinput}
          placeholder='Confirm password'
          secureTextEntry={true}
          onChangeText={text => handleRegistration(text, 'passwordRep')}
        />
        {!errorMsg === '' ? <Text>{errorMsg}</Text> : null}
      </View>
      <TouchableHighlight
        style={Styles.signup__button}
        onPress={e => submitForm(e)}
      >
        <Text style={Styles.signup__button__text}>SIGN UP</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={Styles.member__button}
        onPress={() => navigate('Login')}
      >
        <Text style={Styles.member__button__text}>I'm already a member</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Startpage;
