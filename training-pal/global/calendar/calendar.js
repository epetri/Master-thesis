import React from 'react';
import Styles from './calendarStyle';
import { View, Text, TouchableHighlight } from 'react-native';
import moment from 'moment';
import {
  Table,
  TableWrapper,
  Row,
  Rows,
  Cell
} from 'react-native-table-component';
import CreateCalendar from './dates';

function Calendar(props) {
  //   moment.locale('sv');
  const dateContent = moment();
  let weekdaysShort = moment.weekdaysShort();
  let month = moment().format('MMMM');
  let year = moment().format('YYYY');

  //   Get day of the week
  let firstDayOfMonth = () => {
    let firstDay = moment(dateContent)
      .startOf('month')
      .format('d');
    return firstDay;
  };

  // Get the weekdays sun, mon, yue, wed, thu, fri, sat
  let weekdays = [];
  let days = weekdaysShort.map(day => {
    weekdays.push([day]);
  });

  swap();

  function swap() {
    let shift = weekdays.shift();
    weekdays.push(shift);
  }

  //  Find the 'blank' dates of the month
  let blank = [];
  for (let i = 1; i < firstDayOfMonth(); i++) {
    blank.push(' ');
  }

  let dayInMonth = [];
  for (let d = 1; d <= dateContent.daysInMonth(); d++) {
    dayInMonth.push(d);
  }

  return (
    <View style={Styles.container}>
      <Table>
        <View style={Styles.Calendar__header__monthYear}>
          <TouchableHighlight>
            <Text style={Styles.Calendar__header__monthYear__text}>
              {month}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight>
            <Text style={Styles.Calendar__header__monthYear__text}>{year}</Text>
          </TouchableHighlight>
        </View>
        <Row
          style={Styles.table__weekdays}
          data={weekdays}
          textStyle={Styles.table__weekdays__text}
        />
        <TableWrapper style={Styles.table__dates}>
          <CreateCalendar blank={blank} dayInMonth={dayInMonth} />
        </TableWrapper>
      </Table>
    </View>
  );
}

export default Calendar;
