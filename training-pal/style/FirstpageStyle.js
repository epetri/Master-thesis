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
  wrkout__button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2.5,
    borderRadius: 60,
    height: 55,
    width: 300,
    borderColor: '#E42BD2',
    marginTop: 20
  },
  wrkout__button__inaktive: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2.5,
    borderRadius: 60,
    height: 55,
    width: 300,
    borderColor: 'rgba(99, 99, 99, 0.51)',
    marginTop: 20
  },
  wrkout__button__text: {
    color: '#E42BD2',
    fontSize: 23
  },
  wrkout__button__text__inaktive: {
    color: 'rgba(99, 99, 99, 0.51)',
    fontSize: 23
  }
});
