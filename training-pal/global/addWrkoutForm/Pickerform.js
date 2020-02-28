import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  Picker,
  TextInput
} from 'react-native';
import Styles from './Style/AddWrkFStyle';

function PickerForm(props) {
  return (
    <View style={Styles.form__container}>
      <View style={Styles.form__QuestionContainer}>
        <Text>Day:</Text>
        <TouchableHighlight>
          <Text>Date</Text>
        </TouchableHighlight>
      </View>
      {/*---------- ACTIVITY PICKER ---------  */}
      <View style={Styles.form__QuestionContainer}>
        <Text>Activity</Text>
        <Picker
          style={{ width: '80%' }}
          selectedValue={props.workout.training}
          onValueChange={(itemValue, itemIndex) => {
            props.setWorkout({
              ...props.workout,
              training: itemValue
            });
          }}
        >
          <Picker.Item enabled={true} label='Select activity' value='' />
          <Picker.Item label='Gym' value='Gym' />
          <Picker.Item label='Running' value='Running' />
          <Picker.Item label='walk' value='Walk' />
        </Picker>
      </View>

      {/*---------- SET PICKER ---------  */}
      <View style={Styles.form__QuestionContainer}>
        <Text>Set</Text>
        <TextInput
          keyboardType='number-pad'
          value={props.workout.set}
          onChangeText={text => {
            props.setWorkout({
              ...props.workout,
              set: text
            });
          }}
        ></TextInput>
      </View>
    </View>
  );
}

export default PickerForm;
