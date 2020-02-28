import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  form__container: {
    height: '95%',
    width: '100%',
    backgroundColor: 'rgba(99, 99, 99, 0.51)',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },

  // Form container
  form__container__header: {
    color: 'white',
    fontSize: 25
  },
  form__QuestionContainer: {
    flexDirection: 'row'
  }
});
