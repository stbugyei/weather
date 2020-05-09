import React, { Component } from 'react';
import HeaderBanner from './HeaderBanner';
import Form from './Form';
import DisplayCountries from './DisplayCountries';
import DisplayWeather from './DisplayWeather';



//const API_KEY = "b2ef7b3ccbdb6c1a8cfc6cc6b959fd92";
const API_KEY = "b025832c52f17370a6893bceec8d291e";
const countryApi = 'https://restcountries.eu/rest/v2/all'

class CountriesWeather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: [],
            searchCountry: '',
            icon: '13d',
            temperature: '',
            temp_min: '',
            clear: '',
            temp_max: '',
            city: '',
            country: '',
            humidity: '',
            description: '',
            error: '',
            loading: true
        };
    }

    //========= An async and wait function to display default weather =========

    displayDefaultWeather = async () => {
        const weatherApi = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=helsinki,finland&appid=${API_KEY}&units=metric`);
        const data = await weatherApi.json();
        this.setState({
            icon: data.weather[0].icon,
            temp_min: (data.main.temp_min).toFixed(),
            temp_max: (data.main.temp_max).toFixed(),
            temperature: (data.main.temp).toFixed(),
            clear: data.weather[0].main,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: "",
            loading: false
        });
    }

    //========= mounting component to fetch data from the country and weather API's =========

    componentDidMount() {
        // this.displayDefaultWeather();
        fetch(countryApi)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    countries: data
                })
            })
    };


    //========= An onChange event for populating the state =========  

    handleOnChange = (e) => {
        let value = e.target.value
        this.setState({ searchCountry: value });
        this.setState({ city: value });
        this.setState({ country: value });
    };

    // ========================= HandleClick event to display weather base search criterea ================================
    handleOnClick = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        if (city) {
            const weatherApi = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
            const data = await weatherApi.json();

            this.setState({
                icon: data.weather[0].icon,
                temp_min: (data.main.temp_min).toFixed(),
                temp_max: (data.main.temp_max).toFixed(),
                temperature: (data.main.temp).toFixed(),
                clear: data.weather[0].main,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: "",
                loading: true
            });
        }
        else
            this.setState({
                icon: '',
                timezone: '',
                temperature: '',
                clear: '',
                temp_min: '',
                temp_max: '',
                city: '',
                country: '',
                humidity: '',
                description: '',
                error: "Please enter the correct city or country",
                loading: true
            });

    }
    render() {

        return (

            <>
                <div className='wrapper_banner'>
                    <HeaderBanner {...this.state} />
                    <div className='form_wrapper' onSubmit={this.handleOnClick} onChange={this.handleOnChange}><Form /></div>
                    <DisplayWeather  {...this.state} />
                </div>
                <DisplayCountries {...this.state} />
            </>
        );
    }
}

export default CountriesWeather;