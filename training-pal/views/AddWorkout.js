import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  ActivityIndicator
} from 'react-native';
import Flow from '../assets/flow.png';
import Styles from '../style/AddWorkoutStyle';
import Form from '../global/addWrkoutForm/AddWrkoutForm';

function Addworkout(props) {
  const { navigate } = props.navigation;

  return (
    <View style={Styles.container}>
      <Image style={Styles.flowImg} source={Flow} />
      <View>
        <Form />
      </View>
    </View>
  );
}

export default Addworkout;
