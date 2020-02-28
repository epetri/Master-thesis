import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Styles from './Style/AddWrkFStyle';
import Pickerform from './Pickerform';

function AddWorkoutForm(props) {
  const [workout, setWorkout] = useState({
    date: null,
    training: null,
    set: null,
    reps: null,
    kg: null,
    min: null,
    distance: null
  });

  console.warn(workout);

  return (
    <View style={Styles.form__container}>
      <Text style={Styles.form__container__header}>ADD WORKOUT</Text>
      <View style={Styles.form__QuestionContainer}>
        <Pickerform workout={workout} setWorkout={setWorkout} />
      </View>
    </View>
  );
}

export default AddWorkoutForm;

/* Skapa en modal som sköter hanteringen av träningspassen.
 Där sker api anrop som både lägger till och hämtar pass. 
 Skapa en tom array med object som en databas i backenden*/
