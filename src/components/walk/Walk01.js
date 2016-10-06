import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableHighlight,
  Modal,
  Dimensions
} from 'react-native';

import ModalLogin from '../modals/ModalLogin';
import ModalRegistrarse from '../modals/ModalRegistrarse';

class Walk01 extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      modalVisibleRegistrarse: false,
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setModalVisibleRegistrarse(visible) {
    this.setState({modalVisibleRegistrarse: visible});
  }

  render() {
    return (
      <Image source={require('../../images/walk01.jpg')} style={styles.image}>
        <Image
          style={styles.logo}
          source={require('../../images/banighton.png')}
        />
        <View style={styles.buttons}>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true)
            }}
            style={styles.ingresarBoton}
          >
            <View style={styles.ingresarTextoContenedor}>
              <Text style={styles.ingresarTitulo}>
                INGRESAR
              </Text>
            </View>
          </TouchableHighlight>
          <View style={styles.registrarseContenedor}>
            <Text style={styles.registrarseTexto}>Todavía no tienes cuenta?</Text>
            <TouchableHighlight
              onPress={() => {this.setModalVisibleRegistrarse(true)}}
            >
              <View style={styles.registrarseBoton}>
                <Text style={styles.registrarseBotonTexto}>
                  Registrate
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>

        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={this.setModalVisible.bind(this, false)}
          >
         <ModalLogin setModalVisible={this.setModalVisible.bind(this, false)} navigator={this.props.navigator} route={this.props.route}/>
        </Modal>

        <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.state.modalVisibleRegistrarse}
          onRequestClose={this.setModalVisibleRegistrarse.bind(this, false)}
          >
          <ModalRegistrarse setModalVisibleRegistrarse={this.setModalVisibleRegistrarse.bind(this, false)} navigator={this.props.navigator} route={this.props.route}/>
        </Modal>
      </Image>
    );
  }
}

var ancho = Dimensions.get('window').width;
var caja = ancho / 2;

const styles = StyleSheet.create({
  image:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text:{
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'sans-serif-light',
  },
  textTitle:{
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'sans-serif',
  },
  logo: {
    width: 250,
    height: 60,
  },
  buttons:{
    marginTop: 180,
  },
  ingresarBoton:{
    height: 50,
    width: 300,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#fff',
  },
  ingresarTextoContenedor:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ingresarTitulo:{
    color: '#fff',
  },
  ingresarTexto:{
    color: '#fff',
    fontFamily: 'sans-serif-light',
    fontSize: 9,
  },
  registrarseContenedor:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 13,
  },
  registrarseTexto:{
    color: '#fff',
    fontFamily: 'sans-serif-light',
    fontSize: 13,
    marginTop: 5,
  },
  registrarseBoton:{
    marginLeft: 5,
    padding: 5,
    paddingBottom: 10,
  },
  registrarseBotonTexto:{
    color: '#fff',
    fontSize: 13,
  }
});

export default Walk01;
