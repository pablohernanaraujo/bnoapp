import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableHighlight,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import authService from '../services/AuthService';
import DataService from '../services/DataService';

import Details from './Details';

class Bares extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      loaded: false,
      empty: ''
    }
  }

  fetchData(){
    DataService.baresInfo((cb) => {
      if(cb.length === 0) {
        //console.log('array empty');
        this.setState({
          empty: 'No se encontraron Discos cerca.'
        });
      }else{
        //console.log('array NO empty');
      }
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(cb),
        loaded: true
      })
    })
  }

  renderLugar(lugar){
    return(
      <TouchableHighlight
        onPress={() => this.onLugarPressed(lugar)}
        style={styles.lugar}
      >
        <Image
          style={styles.listbase}
          source={require('../../images/listBase04.png')}
        >
          <View syle={styles.lugarInterno}>
            <View style={styles.logoContenedorFuera}>
              <View style={styles.logoContenedor}>
                <Image
                  source={{uri: lugar.logo.url}}
                  style={styles.logo}
                />
              </View>
            </View>
            <View style={styles.contenedorTexto}>
              <Text style={styles.title}>{lugar.nombre}</Text>
              <Text style={styles.address}>{lugar.direccion}</Text>
              <View style={styles.musicasContenedor}>{lugar.musics.map(musica => <Text style={styles.musica}  key={musica.key}>{musica.estilo}</Text>)}</View>
              <Text style={styles.textologo}>{lugar.textologo}</Text>
              <View style={styles.iconos}>
                {/* <Icon style={styles.iconsIcon} name="star" size={20} color="rgba(255,255,255,1)" />
                <Text style={styles.iconsText}>4.5</Text> */}
                <IconMaterial style={styles.iconsIcon} name="place" size={20} color="rgba(255,255,255,1)" />
                <Text style={styles.iconsText}>{lugar.distancia}</Text>
              </View>
              <View style={styles.arrow}>
                <Icon name="angle-right" size={20} color="rgba(255,255,255,0.3)" />
              </View>
            </View>
          </View>

        </Image>
      </TouchableHighlight>
    )
  }

  onLugarPressed(lugar){
    this.props.navigator.push({
      name: 'Detalles',
      title: lugar.nombre,
      passProps: {lugar: lugar}
    });
  }

  renderLoadingView(){
    return(
      <ActivityIndicator
        animating={this.state.animating}
        style={[styles.container, {height: 80}]}
        size="large"
        color="#fff"
      />
    )
  }

  componentDidMount(){
    this.fetchData();
  }

  render() {
    if(!this.state.loaded){
      return this.renderLoadingView();
    }
    var empty = <View/>;
    if(this.state.empty){
      empty = <View style={styles.emptyContenedor}><Text style={styles.empty}>{this.state.empty}</Text></View>;
    }
    return(
      <View style={{flex:1}}>
        {empty}
        <View style={styles.rellenotop}/>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderLugar.bind(this)}
          style={styles.listview}
          enableEmptySections={true}
        />
      </View>
    );
  }
}

var ancho = Dimensions.get('window').width;
var anchoLista = ancho -20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66102f',
    padding: 8,
  },
  textCargador: {
    fontSize: 15,
    color: '#fff',
    fontFamily: 'sans-serif-light',
  },
  rellenotop:{
    height: 40,
    backgroundColor: '#66102f',
  },
  listview:{
    backgroundColor: '#66102f',
  },
  lugar:{
    height: 110,
    marginBottom: 5,
  },
  listbase:{
    flex: 1,
    width: ancho,
    resizeMode: 'cover',
  },
  lugarInterno:{
    backgroundColor: 'green',
  },
  logoContenedorFuera:{
    height: 100,
    width: 80,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
  },
  logoContenedor:{
    width: 60,
    height: 60,
    borderRadius: 30,
    position: 'absolute',
    top: 25,
    left: 10,
    bottom: 0,
  },
  logo:{
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  contenedorTexto:{
    paddingTop: 10,
    paddingLeft: 5,
    marginLeft: 80,
    height: 110,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'sans-serif',
  },
  address: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.9)',
    fontFamily: 'sans-serif-light',
  },
  textologo: {
    fontSize: 9,
    color: 'rgba(255,255,255,0.3)',
    fontFamily: 'sans-serif-light',
  },
  arrow:{
    width: 20,
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconos:{
    position: 'absolute',
    width: 63,
    height: 30,
    bottom: 0,
    right: 30,
    flexDirection: 'row',
    padding: 5,
  },
  iconsIcon:{
    marginRight: 5,
  },
  iconsText:{
    marginRight: 5,
    color: 'rgba(255,255,255,0.7)',
  },
  emptyContenedor:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#66102f',
  },
  empty:{
    color: '#fff',
    fontFamily: 'sans-serif-light',
  },
  musicasContenedor:{
    flexDirection: 'row',
  },
  musica:{
    color: 'rgba(255,255,255,0.5)',
    marginRight: 3,
    fontSize: 11,
    fontFamily: 'sans-serif-light',
  }
});

export default Bares;
