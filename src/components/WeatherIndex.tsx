import React, { Component } from 'react';
import { Button } from 'reactstrap';

type StateType = {
    lat: number | string
    lon: number | string
}

export default class WeatherIndex extends Component<{}, StateType> {
    constructor(props: number) {
        super(props);
        this.state = { lat: '', lon: '' };
    }

    fetchLocation = (props: any) => {
        if(navigator.geolocation)
            navigator.geolocation.getCurrentPosition((position) => 
            this.setState({
                lat: position.coords.latitude, 
                lon: position.coords.longitude
            }));
            // console.log(position)
            // return fetchWeather()
        else
            alert('geolocation is not supported by your browser')
    };
    

    fetchWeather = (props: any) => {
        const weatherUrl: string = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=af2c7f76f820c7194b1de48825cf987a`;

        fetch(weatherUrl)
        .then((response) => response.json)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    };
    

    render() {
        return(
            <div>
                <Button color="primary" id="weatherButton" onClick={this.fetchLocation}>Show me the weather!</Button>
                <DisplayWeather />
            </div>
        )
    }
}

const DisplayWeather = (props: any) => {
    return (
        <>
            <h3>Displaying the weather!</h3>
        </>
    )
}