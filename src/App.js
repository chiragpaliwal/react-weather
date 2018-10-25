import React, { Component } from 'react';
import './Day.css';
import Clear from './assets/Clear.svg';
import Clouds from './assets/Clouds.svg';
import rain from './assets/003-rainy.svg';
import snow from './assets/004-snowy.svg';


 class Day extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      day: 'Mon',
      weather: Clear,
      low: 18,
      high: 30
    }
  }

  componentDidMount(){
    //1253986 udaipur id http://api.openweathermap.org/data/2.5/weather?id=1253986&appid=aaf5ee08f734c9eee703186dab9d37ee
    // fetch('http://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22', {mode: 'no-cors'})
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (myJson) {
    //     console.log(JSON.stringify(myJson));
    //   });

    const proxyUrl = 'https://cors-anywhere.herokuapp.com/',
      targetUrl = 'http://api.openweathermap.org/data/2.5/weather?id=1253986&units=metric&appid=aaf5ee08f734c9eee703186dab9d37ee'
    fetch(proxyUrl + targetUrl)
      .then(blob => blob.json())
      .then(data => {
        console.log(data);
        this.setState({
          weather: data.weather[0].main ,
          low: parseInt(data.main.temp_min),
          high: parseInt(data.main.temp_max)
        });
      });
  }

  render() {
    const {day, weather, low, high} = this.state;
    return (
      <div className="day">
        <p className="weekday">{day}</p>
        <img src={weather} alt="day" />
        <p>{low}° {high}°</p>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Day />
      </div>
    );
  }
}

export default App;