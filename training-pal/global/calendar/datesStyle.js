import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  calendar__container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 3
  },
  calendar__cell: {
    width: 46,
    height: 55
  },
  calendar__cell__date: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  },
  calendar__cell__today: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'rgba(116, 107, 107, 0.63)',
    borderRadius: 50
  }
});
