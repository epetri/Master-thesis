import React from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
import Flow from '../assets/flow.png';
import Calendar from '../global/calendar/calendar';
import Styles from '../style/FirstpageStyle';

function Firstpage(props) {
  const { navigate } = props.navigation;

  return (
    <View style={Styles.container}>
      <Image style={Styles.container__flowImg} source={Flow} />
      <Calendar />
      <TouchableHighlight
        style={Styles.wrkout__button}
        onPress={() => navigate('Addworkout')}
      >
        <Text style={Styles.wrkout__button__text}>ADD NEW WORKOUT +</Text>
      </TouchableHighlight>
      <TouchableHighlight style={Styles.wrkout__button__inaktive}>
        <Text style={Styles.wrkout__button__text__inaktive}>
          RANDOMIZE WORKOUT
        </Text>
      </TouchableHighlight>
    </View>
  );
}

export default Firstpage;
