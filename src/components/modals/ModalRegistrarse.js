import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconEvil from 'react-native-vector-icons/EvilIcons';
import authService from '../services/AuthService';
import validateInput from '../../validations/register';

class ModalRegistrarse extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      modalVisibleRegistrarse: false,
      isFocusedEmail: false,
      isFocusedPass: false,
      inFocusedPassConfirm: false,
      password: '',
      passwordConfirmation: '',
      email: '',
      errors: {},
      animating: false
    };
  }

  _onBlurEmail(e) {
    this.setState({ isFocusedEmail: false })
  }

  _onFocusEmail(e) {
    this.setState({ isFocusedEmail: true })
  }

  _onBlurPass(e) {
    this.setState({ isFocusedPass: false })
  }

  _onFocusPass(e) {
    this.setState({ isFocusedPass: true })
  }

  _onBlurPassConfirm(e) {
    this.setState({ isFocusedPassConfirm: false })
  }

  _onFocusPassConfirm(e) {
    this.setState({ isFocusedPassConfirm: true })
  }


  isValid(){
		const { errors, isValid } = validateInput(this.state);
		if(!isValid){
      this.setState({ errors });
		}
		return isValid;
	}

  onRegisterPressed(){
    if(this.isValid()){
    this.setState({ errors: {}, animating: true });
      authService.register({
        email: this.state.email,
        password: this.state.password
      }, (data)=>{
        if(data === 'bienvenido'){
          this.setState({results: null , animating: false });
          this.props.navigator.replace({
            title: 'Tabbar',
            name: 'Tabbar',
            passProps: {}
          });
        }else{
          this.setState({errors:{ passwordConfirmation: data}, animating: false });
        }
      });
    }
  }

  render() {
    var errorCtrl = <View />;
    if(this.state.results){
      errorCtrl = <Text style={styles.results}>{this.state.results}</Text>
    }
    return (
      <View
        style={{
          flex: 1,
          backgroundColor:'rgba(0, 0, 0, 0.8)',
        }}
      >
        <View style={styles.modalView}>
          <TouchableHighlight
            style={styles.buttonCerrar}
            onPress={this.props.setModalVisibleRegistrarse}>
            <IconEvil name="close" size={35} color="rgba(255,255,255,0.6)" />
          </TouchableHighlight>
          <Text style={styles.titulo}>REGISTRARSE</Text>
          <View style={styles.emailContenedor}>
            <Icon style={[styles.icons,
              this.state.isFocusedEmail && styles.focusedIcon]}
              name="envelope" size={20} />
            <View
              style={[
                styles.inputView,
                this.state.isFocusedEmail && styles.focused
              ]}
            >
              <TextInput
                keyboardType="email-address"
                placeholder="Email"
                placeholderTextColor={this.state.isFocusedEmail ? '#00aeef' : '#fff'}
                onChangeText={(email)=> this.setState({email})}
                style={styles.input}
                onBlur={this._onBlurEmail.bind(this)}
                onFocus={this._onFocusEmail.bind(this)}
                onSubmitEditing={(event) => {
                  this.refs.SecondInput.focus();
                }}
                underlineColorAndroid="rgba(255,255,255,0)"
              />
            </View>
          </View>

          <Text style={styles.errors}>{this.state.errors.email}</Text>

          <View style={styles.emailContenedor}>
            <Icon style={[styles.icons,
              this.state.isFocusedPass && styles.focusedIcon]}
              name="lock" size={20} />
            <View
              style={[
                styles.inputView,
                this.state.isFocusedPass && styles.focused
              ]}
            >
              <TextInput
                ref="SecondInput"
                placeholder="Password"
                placeholderTextColor={this.state.isFocusedPass ? '#00aeef' : '#fff'}
                onChangeText={(password)=> this.setState({password})}
                secureTextEntry={true}
                style={styles.input}
                onBlur={this._onBlurPass.bind(this)}
                onFocus={this._onFocusPass.bind(this)}
                onSubmitEditing={(event) => {
                  this.refs.ThirdInput.focus();
                }}
                underlineColorAndroid="rgba(255,255,255,0)"
              />
            </View>
          </View>

          <Text style={styles.errors}>{this.state.errors.password}</Text>

          <View style={styles.emailContenedor}>
            <Icon style={[styles.icons,
              this.state.isFocusedPassConfirm && styles.focusedIcon]}
              name="unlock-alt" size={20} />
            <View
              style={[
                styles.inputView,
                this.state.isFocusedPassConfirm && styles.focused
              ]}
            >
              <TextInput
                ref="ThirdInput"
                placeholder="Confirmar password"
                placeholderTextColor={this.state.isFocusedPassConfirm ? '#00aeef' : '#fff'}
                onChangeText={(passwordConfirmation)=> this.setState({passwordConfirmation})}
                secureTextEntry={true}
                style={styles.input}
                onBlur={this._onBlurPassConfirm.bind(this)}
                onFocus={this._onFocusPassConfirm.bind(this)}
                onSubmitEditing={this.onRegisterPressed.bind(this)}
                underlineColorAndroid="rgba(255,255,255,0)"
              />
            </View>
          </View>

          <Text style={styles.errorsPass}>{this.state.errors.passwordConfirmation}</Text>

          <ActivityIndicator
            animating={this.state.animating}
            style={styles.centering}
            color="#00aeef"
            size="large"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modal:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor:'rgba(0, 0, 0, 0.8)',
  },
  modalView:{
    backgroundColor: '#080b0c',
    paddingTop: 70,
  },
  emailContenedor:{
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'center',
    flexDirection:'row',

  },
  titulo:{
    color: '#fff',
    fontFamily: 'sans-serif-light',
    position: 'absolute',
    top: 0,
    left: 40,
    right: 40,
    textAlign: 'center',
    padding: 10,
  },
  icons:{
    color: '#fff',
    paddingTop: 10,
  },
  input: {
    width: 250,
    color: '#fff',
    height: 40,
    padding: 4,
    fontFamily: 'sans-serif-light',
  },
  inputView: {
    borderColor: '#FFFFFF',
    borderBottomWidth: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  focused: {
    borderColor: '#00aeef',
  },
  focusedIcon: {
    color: '#00aeef',
  },
  buttonCerrar: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 5,
  },
  errors:{
    color: '#d12b2b',
    marginLeft: 65,
    marginTop: 5,
    height: 20,
  },
  errorsPass:{
    color: '#d12b2b',
    marginLeft: 65,
    marginTop: 5,
    height: 35,
  },
});

export default ModalRegistrarse;
