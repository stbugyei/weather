import React, { Component } from 'react';
//import WeatherIcon from 'react-icons-weather';

const API_KEY = "b2ef7b3ccbdb6c1a8cfc6cc6b959fd92";


/*const WeatherComponent = (props) => {
    return (
      <div>
        <WeatherIcon name="owm" iconId="200" flip="horizontal" rotate="90" />
      </div>
    )
  }
*/

import React, { Component } from 'react';

const API_KEY = "b2ef7b3ccbdb6c1a8cfc6cc6b959fd92";


class Weather extends Component {
    state = {
        icon: '13d',
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error:''
    };

    //========= An onChange event for populating the state(searchCountry)=========  
    handleOnChange = (e) => {
        this.setState({ city: e.target.value });
        this.setState({ country: e.target.value });
    };

    onSubmit = (e) => {
        e.preventDefault();
  };

    //========= mounting component to display default weather=========

    componentDidMount() {
        this.fetchWeather()
    }

    fetchWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=helsinki,finland&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        this.setState({
            icon: data.weather[0].icon,
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
        });
    }
// ========================= HandleClick event to display weather base search criterea ================================
    handleClick = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        if (city) {
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
            const data = await api_call.json();
            console.log(data)
            this.setState({
                icon: data.weather[0].icon,
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        }
        else {
            this.setState({
                icon:'',
                temperature: '',
                city: '',
                country: '',
                humidity: '',
                description: '',
                error: "Please enter city and country details correctly"
            });
        }
    }
    render() {
       
        return (
            <div className='weather_card'>
                <center>
                    <div>
                        <form onSubmit={this.handleClick}>
                            <div className='form_title'>Current Weather in <span style={{color:'indigo'}}>{this.state.city}</span></div>
                            <div>
                                <div><input type="text" name="city"  placeholer='City' onChange={this.handleOnChange} placeholder="City/Country"/></div>
                                <div><input className="hidecountry" type="text" name="country"  onChange={this.handleOnChange}  placeholder="Country..."/></div>
                                <div><button className="btn_btn--startwithname" onChange={this.handleClick}>Get Weather</button></div>
                            </div>
                        </form>
                    </div>
                  <div className='weather-wrapper'>
                  <div className='weather-wrapper_img'>
                      <img className='avatar' src={`http://openweathermap.org/img/w/${this.state.icon}.png` } alt='img' />
                  </div>
                  <div className='weather-wrapper_content'>Temperature: {this.state.temperature}&#8451;</div>
                  <div className='weather-wrapper_content'>Humidity: {this.state.humidity}&#37;</div>
                  <div className='weather-wrapper_content'>City/Country: {this.state.city}</div>
                  <div className='weather-wrapper_content'>Country: {this.state.country}</div>
                  <div className='weather-wrapper_content'>Description: {this.state.description}</div>
                  <p>{this.state.error}</p>
              </div>
                </center>
            </div>
        );
    }
}

export default Weather;

import React, { Component } from 'react';
//import weather from "./FetchData"


const API_KEY = "b2ef7b3ccbdb6c1a8cfc6cc6b959fd92";


class Weather extends Component {
    state = {
        icon: '13d',
        temperature: '',
        city: '',
        country: '',
        humidity: '',
        description: '',
        error: ''
    };


    //========= An onChange event for populating the state(searchCountry)=========  
    handleOnChange = e => this.setState({ city: e.target.value.toString() });
    handleOnChange = e => this.setState({ country: e.target.value.toString() });


    //========= mounting component to display default weather=========

    componentDidMount() {
        this.fetchWeather()
    }

    fetchWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=helsinki,finland&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        this.setState({
            icon: data.weather[0].icon,
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
        });
    }
// =======================================================================
    handleClick = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        if (city) {
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
            const data = await api_call.json();
            this.setState({
                icon: data.weather[0].icon,
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        }
        else {
            this.setState({
                icon: '',
                temperature: '',
                city: '',
                country: '',
                humidity: '',
                description: '',
                error: "Please enter city and country details correctly"
            });
        }
    }

    render() {
        return (
            <div className='container_first--item '>
                <center>
                    <div>
                        <form onSubmit={this.handleClick}>
                            <h3>Current Weather</h3><br></br>
                            <div>
                                <div><input type="text" name="city" onChange={this.handleOnChange} placeholder="City..." /></div>
                                <div><input className="hidecountry" input type="text" name="country" onChange={this.handleOnChange} placeholder="Country..." /></div>
                                <button className="btn_btn--startwithname">Get Weather</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className='weather-wrapper'>
                            <div className='weather-wrapper_img'>
                                <img src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt='img' />
                            </div>
                            <div className='weather-wrapper_content'>Temperature: {this.state.temperature}&#8451;</div>
                            <div className='weather-wrapper_content'>Humidity: {this.state.humidity}&#37;</div>
                            <div className='weather-wrapper_content'>City/Country: {this.state.city}</div>
                            <div className='weather-wrapper_content'>Country: {this.state.country} </div>
                            <div className='weather-wrapper_content'>Description: {this.state.description}</div>
                            <p>{this.state.error}</p>
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}

export default Weather;
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import Weather from "./CountriesWeather"

const API_KEY = "b2ef7b3ccbdb6c1a8cfc6cc6b959fd92";
export class FetchData extends Component {

    constructor() {
        super()
        this.state = {
            countries: [],
            searchCountry: ''
        }
    }

    //========= An onChange event for populating the state(searchCountry)=========  
    componentDidMount() {
        const url = 'https://restcountries.eu/rest/v2/all'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    countries: data
                })
            })
    }
  
    //========= An onChange event for populating the state(searchCountry)=========  
    onChange = e => this.setState({ searchCountry: e.target.value });


    //========= An onSubmit event for submitting the state(searchCountry)=========
     onSubmit = (e) => {
          e.preventDefault();
    };

    render() {

        const { countries } = this.state
     /*   const countriesList = countries.map(country => (
            <div className='container_first--item ' key={country.name}>
                <img style={{ width: '100%', paddingBottom: '20px' }} src={country.flag} alt='' />
                <p>Name: {country.name} </p>
                <p>Capital: {country.capital}</p>
                <p>Language: {`${country.languages.map(l => `${l.name}`)}`}</p>
                <p>Population: {country.population.toLocaleString('en-US')}</p>
                <p>Currency: {`${country.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(' ,')}`}</p>
                <p> Time: {country.timezones} </p>
            </div>
        ))*/

        //========= Making a search filter by name =========      
        const { searchCountry } = this.state;
        const FilteredCountries = this.state.countries.filter((country) =>
        country.name.toLowerCase().includes(this.state.searchCountry.toLowerCase())
        );


        const filteredList = FilteredCountries.map(country => (
            <div className='container_first--item ' key={country.name}>
                <img style={{ width: '100%', paddingBottom: '20px' }} src={country.flag} alt='' />
                <p>Name: {country.name} </p>
                <p>Capital: {country.capital}</p>
                <p>Language: {`${country.languages.map(l => `${l.name}`)}`}</p>
                <p>Population: {country.population.toLocaleString('en-US')}</p>
                <p>Currency: {`${country.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(' ,')}`}</p>
                <p>Time: {country.timezones} </p>
            </div>
        ))

        return (

            <div>
                <div className='banner'>
                    <div className='banner_text'>WORLD COUNTRY DATA</div>
                    <div style={{ textAlign: 'center', fontSize: '25px', padding: '10px' }}>There are {this.state.countries.length} Countries at present!</div>
                </div>
                <div className="search">
                    <form className='form' onSubmit={this.onSubmit}>
                        <input
                            id=""
                            placeholder="Search Countries"
                            type="text"
                            onChange={this.onChange}
                            value={this.state.searchCountry}
                        />                     
                        <div className="button">
                       
                    </div>
                    </form>
                </div>
                <div className='container_first'>
                <Weather /> {filteredList} 
                </div>
            </div>
        )
    }
}

export default FetchData

//(((((((((((((((((((((((((((((((((((((888888)))))))))))))))))))))))))))))))))))))
import React, { Component } from 'react';
import TimeInterval from './TimeInterval';
import FetchCountries from './DisplayCountries';

//const API_KEY = "b2ef7b3ccbdb6c1a8cfc6cc6b959fd92";
const API_KEY = "b025832c52f17370a6893bceec8d291e";

class Weather extends Component {
    constructor(props) {
        super(props)
      this.state = {
            countries: [],
            searchCountry: '',
            icon: '13d',
            temperature: '',
            city: '',
            country: '',
            humidity: '',
            description: '',
            error: ''
        };   
}
   
update = countries => {
    this.setState({countries:countries})
 }


    componentDidMount() {
        const url = 'https://restcountries.eu/rest/v2/all'
        fetch(url)
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

    onSubmit = (e) => {
        e.preventDefault();
    };

    //========= mounting component to display default weather=========

  /*  componentWillMount() {
        this.fetchWeather()
    }*/

  /*  fetchWeather = async () => {
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=helsinki,finland&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        this.setState({
            icon: data.weather[0].icon,
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: ""
        });
    }*/
    // ========================= HandleClick event to display weather base search criterea ================================
    handleClick = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        if (city) {
            const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
            const data = await api_call.json();
            this.setState({
                icon: data.weather[0].icon,
                temperature: data.main.temp,
                city: data.name,
                country: data.sys.country,
                humidity: data.main.humidity,
                description: data.weather[0].description,
                error: ""
            });
        }
        else {
            this.setState({
                icon: '',
                temperature: '',
                city: '',
                country: '',
                humidity: '',
                description: '',
                error: "Please enter city and country details correctly"
            });
        }
    }
    render() {

        //========= Making a search filter by name and city =========      
        const FilteredCountries = this.state.countries.filter((country) =>
            country.name.toLowerCase().includes(this.state.searchCountry.toLowerCase()) || country.capital.toLowerCase().includes(this.state.searchCountry.toLowerCase())
        );


        const filteredList = FilteredCountries.map(country => (
            <div className='container_first--item ' key={country.name}>
                <img style={{ width: '100%', paddingBottom: '20px' }} src={country.flag} alt='' />
                <p>Name: {country.name} </p>
                <p>Capital: {country.capital}</p>
                <p>Language: {`${country.languages.map(l => `${l.name}`)}`}</p>
                <p>Population: {country.population.toLocaleString('en-US')}</p>
                <p>Currency: {`${country.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(' ,')}`}</p>
                <p>Time: {country.timezones} </p>
            </div>
        ))

        return (
            <div>
                <center>
                    <div className='wrapper_banner'>
                        <div className='wrapper_banner--content' >
                            <div className='banner'>
                                <div className='banner_text'>WORLD COUNTRY DATA</div>
                                <div style={{ fontSize: '30px', margin: '20px', textAlign: 'center' }}><TimeInterval /></div>
                                <div style={{ textAlign: 'center', fontSize: '25px', padding: '10px', color: 'indigo' }}>There are {this.state.countries.length} Countries at present!</div>

                            </div>
                            <form className="search" onSubmit={this.handleClick}>
                                <div>
                                    <div><input type="text" name="city" placeholer='City' onChange={this.handleOnChange} placeholder="City/Country" />
                                        <button className="btn" onChange={this.handleClick}>Click to Get Weather</button></div>
                                    <div><input className="hidecountry" type="text" name="country" onChange={this.handleOnChange} placeholder="Country..." value={this.state.searchCountry} />
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div className='weather_wrapper'>
                            <div className='weather_details'>
                                <div className='weather-wrapper_img'>
                                    <img className='avatar' src={`http://openweathermap.org/img/w/${this.state.icon}.png`} alt='img' />
                                </div>
                                <div className='weather-wrapper_content'>Temperature<br></br> <span style={{ fontSize: '100px' }}>{this.state.temperature}&#xb0;</span></div>
                                <div className='weather-wrapper_content'>Humidity<br></br> <span style={{ fontSize: '30px' }}>{this.state.humidity}&#37;</span> </div>
                                <div className='weather-wrapper_content'>City/Country<br></br> <span style={{ fontSize: '30px' }}>{this.state.city}</span> </div>
                                <div className='weather-wrapper_content'>Country<br></br> <span style={{ fontSize: '30px' }}>{this.state.country}</span> </div>
                                <div className='weather-wrapper_content'>Description<br></br><span style={{ fontSize: '30px' }}>{this.state.description}</span> </div>
                                <p>{this.state.error}</p>
                            </div>
                        </div>
                    </div>
                </center>
                <div>
                    <FetchCountries  {...this.state} />
 
                </div>
            </div>
        );
    }
}

export default Weather;