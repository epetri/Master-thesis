import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  ActivityIndicator
} from 'react-native';
import Icon from '../assets/icon.png';
import Flow from '../assets/flow.png';
import Styles from '../style/StartpageStyle';

function Firstpage(props) {
  const { navigate } = props.navigation;

  return (
    <View style={Styles.container}>
      <Image style={Styles.flowImg} source={Flow} />
      <Image
        style={Styles.iconImg}
        source={Icon}
        PlaceholderContent={<ActivityIndicator />}
      />
      <TouchableHighlight
        style={Styles.button}
        onPress={() => navigate('Login')}
      >
        <Text style={Styles.text}> GET STARTED</Text>
      </TouchableHighlight>
    </View>
  );
}

export default Firstpage;
