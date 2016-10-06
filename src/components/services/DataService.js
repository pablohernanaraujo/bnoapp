import { firebaseAuth, firebaseDb } from '../../firebase';
import {
  AsyncStorage
} from 'react-native';

class DataService{
  discosInfo(cb){
    return firebaseDb.ref('lugares').on('value', function(snapshot) {
  		var lugares = snapshot.val();

      var discos = []
      var bares = []

      for (var k in lugares){
        if (lugares.hasOwnProperty(k)){
          var obj   = lugares[k];
          for (var i in obj){
            if (obj.hasOwnProperty(i)){
              if(obj[i].status === 1){
                if(obj[i].tipo === 'Disco'){
                  discos.push(obj[i]);
                }else{
                  bares.push(obj[i]);
                }
              }
            }
          }
        }
      }

      return cb(discos);
  	});
  }

  baresInfo(cb){
    firebaseDb.ref('lugares').on('value', function(snapshot) {
  		var lugares = snapshot.val();

      var discos = []
      var bares = []

      for (var k in lugares){
        var obj = lugares[k];
        for (var i in obj){
          var music = obj[i].musicas;
          var musics = [];
          for(n in music){
            musics.push(music[n]);
          }
          obj[i].musics = musics;
          if(obj[i].status === 1){
            if(obj[i].tipo === 'Disco'){
              discos.push(obj[i]);
            }else{
              bares.push(obj[i]);
            }
          }
        }
      }

      // var lat1 = '';
      // var lon1 = '';
      // var lat2 = -34.64439339999999;
      // var lon2 = -58.5648324;

      // for(var m in bares){
      //   navigator.geolocation.getCurrentPosition(
      //     (position) => {
      //       if(position){
      //         lat1 = position.coords.latitude;
      //         lon1 = position.coords.longitude;
      //         bares[m].distancia = lat1 +', '+ lon1;
      //         console.log(bares[m]);
      //       }
      //
      //       //getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2);
      //     },
      //     (error) => alert(error.message),
      //     {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      //   );
      //
      // }

      // function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
      //   console.log('distance');
      //   var R = 6371; // Radius of the earth in km
      //   var dLat = deg2rad(lat2-lat1);  // deg2rad below
      //   var dLon = deg2rad(lon2-lon1);
      //   var a =
      //     Math.sin(dLat/2) * Math.sin(dLat/2) +
      //     Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      //     Math.sin(dLon/2) * Math.sin(dLon/2)
      //     ;
      //   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      //   var d = R * c; // Distance in km
      //   console.log(d);
      // }
      //
      // function deg2rad(deg) {
      //   return deg * (Math.PI/180)
      // }

      console.log(bares);
      return cb(bares);

  	});
  }

  locationInfo(cb){
    navigator.geolocation.getCurrentPosition(
      (position) => {

        return cb(position);
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }
}

module.exports = new DataService();
