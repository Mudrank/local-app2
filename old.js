import * as React from 'react';
import { View , Text , Image } from 'react-native';


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
  <Text>Loading your weather.....</Text>
  </View>
  )
}else { 
  
     return (
      <View>

      <View>
<Image
style={{
  width:150,
  height:50
}}

 source={
  'https://media.istockphoto.com/photos/kaedebashi-bridge-view-from-katsurabashi-bridge-of-shuzenji-spa-in-picture-id1071719838?k=6&m=1071719838&s=612x612&w=0&h=TjTpPxRrCSDH2Jteq-xd1NcK9iVgU6OWaoMG9iWc-bY='
} />

     <Text>Weather forecast</Text>

     



<View>
     <Text>Temp : {this.state.weather.main.temp} </Text>
     <Text>Humidity :{this.state.weather.main.humidity}  </Text>
     <Text>{this.state.weather.weather[0].description}  </Text>
</View>
      </View>

      </View>
    );

    }

  }
}
