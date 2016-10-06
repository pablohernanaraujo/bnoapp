import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import flagImg from '../../images/pinPersona.png';
import DataService from '../services/DataService';

class Mapa extends Component {
  constructor(props){
    super(props);
    this.state = {
      region: {
        latitude: -34.6081,
        longitude: -58.3703,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0021,
      },
    };
  }

  locacion() {
    console.log('locacion');
    DataService.locationInfo((cb) => {
      this.setState({ region: {
        latitude: cb.coords.latitude,
        longitude: cb.coords.longitude,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0021,
      }});
      console.log(cb);
    });
  }

  componentDidMount(){
    this.locacion();
  }

  render() {
    return (
      <MapView
        style={styles.container}
        region={this.state.region}
        loadingEnabled
        loadingIndicatorColor={"#00aeef"}
        loadingBackgroundColor={"#080b0c"}
      >
        <MapView.Marker
          coordinate={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
          }}
          image={flagImg}
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Mapa;
