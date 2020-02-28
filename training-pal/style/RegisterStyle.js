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
  // ----------- TEXT
  welcomeText__big: {
    color: '#858585',
    fontSize: 35
  },
  welcomeText: {
    color: '#858585',
    fontSize: 25
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
  // ----------- BUTTONS
  signup__button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2.5,
    borderRadius: 60,
    height: 55,
    width: 250,
    borderColor: '#E42BD2',
    marginTop: 20
  },
  signup__button__text: {
    color: '#E42BD2',
    fontSize: 23
  },
  member__button__text: {
    marginTop: 10,
    color: '#858585',
    fontSize: 20,
    borderBottomWidth: 1,
    borderColor: 'gray'
  }
});
