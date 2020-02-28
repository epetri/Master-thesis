import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import Styles from './datesStyle';
import moment from 'moment';

function Createcalendar(props) {
  let totalSlots = [...props.blank, ...props.dayInMonth];
  let initialArray = [];
  let today = moment().format('D');

  totalSlots.map(days => {
    let cell = {
      date: days
    };

    initialArray.push(cell);
  });

  return (
    <View style={Styles.calendar__container}>
      {initialArray.map(cell => {
        return (
          <TouchableHighlight style={Styles.calendar__cell}>
            {cell.date == today ? (
              <Text style={Styles.calendar__cell__today}>{cell.date}</Text>
            ) : (
              <Text style={Styles.calendar__cell__date}>{cell.date}</Text>
            )}
          </TouchableHighlight>
        );
      })}
    </View>
  );
}

export default Createcalendar;
