import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#372E3B'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2.5,
    borderRadius: 60,
    height: 55,
    width: 250,
    borderColor: '#E42BD2',
    marginTop: 50
  },
  text: {
    color: '#E42BD2',
    fontSize: 23
  },
  flowImg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 170
  },
  iconImg: { width: 230, height: 230, marginTop: 50 }
});
