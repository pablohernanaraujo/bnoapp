import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';
import Swiper from 'react-native-swiper';

import Walk01 from './walk/Walk01';
import Walk02 from './walk/Walk02';
import Walk03 from './walk/Walk03';
import Walk04 from './walk/Walk04';
import Walk05 from './walk/Walk05';

class Login extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <Swiper
        dot={<View style={{backgroundColor:'rgba(255,255,255,.3)', width: 13, height: 13,borderRadius: 7, marginLeft: 7, marginRight: 7,}} />}
        activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
        paginationStyle={{
          bottom: 70,
        }}
        loop={true}>
        <View style={styles.slide}>
          <Walk01 navigator={this.props.navigator} route={this.props.route}/>
        </View>
        <View style={styles.slide}>
          <Walk02 />
        </View>
        <View style={styles.slide}>
          <Walk03 />
        </View>
        <View style={styles.slide}>
          <Walk04 />
        </View>
        <View style={styles.slide}>
          <Walk05 />
        </View>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

export default Login;
