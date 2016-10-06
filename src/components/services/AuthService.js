import { firebaseAuth, firebaseDb } from '../../firebase';
import {
  AsyncStorage
} from 'react-native';
import * as firebase from 'firebase';

class AuthService{
  getAuthInfo(cb){
    firebaseAuth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log('User is signed in.');
        var usu = 'logeado';
        return cb(usu);
      } else {
        // No user is signed in.
        console.log('No user is signed in');
        var usu = 'deslogeado';
        return cb(usu);
      }
    });
  }

  login(datos, cb){
    return firebaseAuth.signInWithEmailAndPassword(datos.email, datos.password)
      .then(function(usuario){
        var usu = 'bienvenido';
        console.log(usuario);
        return cb(usu);
      })
      .catch(function(error) {
        if(error){
          var mensaje = '';
          var errorCode = error.code;
          var errorMessage = error.message;

          switch (errorMessage) {
            case 'The password is invalid or the user does not have a password.':
              mensaje = 'El password es invalido.';
              break;
            case 'There is no user record corresponding to this identifier. The user may have been deleted.':
              mensaje = 'El usuario no existe.';
              break;
            default:
              mensaje = 'Error desconocido.';
          }

          console.log(errorMessage);

          return cb(mensaje);
        }
      });
  }

  logout(){
    firebaseAuth.signOut();
  }

  register(datos, cb){
    return firebaseAuth.createUserWithEmailAndPassword(datos.email, datos.password)
      .then(function(usuario){
        console.log(usuario);
        firebaseDb.ref('usuarios').child(usuario.uid).set({
  				regUsuario: usuario.uid,
  				email: datos.email,
          date: firebase.database.ServerValue.TIMESTAMP,
  				status: 1
        })

        var usu = 'bienvenido';
        console.log(usuario);
        return cb(usu);
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        switch (errorMessage) {
          case 'Password should be at least 6 characters':
            mensaje = 'El password debe tener al menos 6 digitos';
            break;
          case 'The email address is already in use by another account.':
            mensaje = 'El email se encuentra en uso.';
            break;
          default:
            mensaje = 'Error desconocido.';
        }

        console.log(errorMessage);

        return cb(mensaje);
      });
  }
}

module.exports = new AuthService();
