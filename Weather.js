import * as React from 'react';
import { View , Text , Image , StyleSheet } from 'react-native';


export default class Weather extends React.Component {
constructor(){
  super();
  this.state = {
    weather: ' ',
  }
}

componentDidMount(){
  this.getWeather()
}

getWeather = async() => {
 
 var url = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139'
 return fetch(url)
 .then(response => response.json())
 .then ( responsejson => {
  this.setState ( {
weather : responsejson
    }  )
 })
 .catch(err => {
   console.error(err)
 })
}


  render() {

if (this.state.weather == ' '){
  return (
  <View>
  <Text style={styles.title}>Loading your weather.....</Text>
  </View>
  )
}else { 
  
     return (
<View>

    <View style={styles.header}>
    <Image
 source={
  'https://media.istockphoto.com/photos/kaedebashi-bridge-view-from-katsurabashi-bridge-of-shuzenji-spa-in-picture-id1071719838?k=6&m=1071719838&s=612x612&w=0&h=TjTpPxRrCSDH2Jteq-xd1NcK9iVgU6OWaoMG9iWc-bY='
} />

  <Text style={styles.title}>Weather forecast for Shuzenji </Text>

    </View>

<View style={styles.infoCon}>
  <Text>Temp : {this.state.weather.main.temp} </Text>
     <Text>Humidity : {this.state.weather.main.humidity}  </Text>
     <Text>Temp min : {this.state.weather.main.temp_min}  </Text>
     <Text>Temp max : {this.state.weather.main.temp_max}  </Text>
     <Text>visibility : {this.state.weather.visibility}  </Text>
     <Text>{this.state.weather.weather[0].description}  </Text>
</View>


</View>
    );

    }

  }
}


const styles = StyleSheet.create({
  header: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
    infoCon: {
    flex: 1,
    padding: 24,
    backgroundColor: '#efefef',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  infoCon: {
    flex: 1,
    padding: 24,
    backgroundColor: '#efefef',
  },
});
