import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // ----------- BACKGROUND
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#372E3B'
  },
  container__flowImg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 170
  },
  // --------- TEXT
  welcomeContainer__text: {
    color: '#858585',
    fontSize: 25
  },
  welcomeContainer__text__big: {
    color: '#858585',
    fontSize: 35
  },

  signupContainer: {
    flexDirection: 'row',
    marginTop: 10
  },

  signupContainer__text: {
    color: '#858585',
    fontSize: 20
  },

  // --------- TEXTINPUT
  textinput: {
    fontSize: 25,
    borderBottomWidth: 1,
    borderColor: 'gray',
    width: 360,
    marginTop: 45,
    color: '#858585',
    paddingLeft: 10
  },

  // --------- BUTTONS
  signin__button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2.5,
    borderRadius: 60,
    height: 55,
    width: 250,
    borderColor: '#E42BD2',
    marginTop: 50
  },
  signin__button__text: {
    color: '#E42BD2',
    fontSize: 23
  },
  register__button__text: {
    color: '#858585',
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: 'gray'
  }
});
