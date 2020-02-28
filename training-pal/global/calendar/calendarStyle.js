import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  //Calendar container
  container: {
    height: '58%',
    width: '80%',
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
  // Table weekdays header
  table__weekdays: {
    flexDirection: 'row',
    height: 30
  },
  table__weekdays__text: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white'
  },
  // Header month year
  Calendar__header__monthYear: {
    flexDirection: 'row'
  },
  Calendar__header__monthYear__text: {
    fontSize: 25,
    color: 'white',
    marginRight: 10,
    marginLeft: 7
  }
});
