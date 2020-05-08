/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
//import Weather from "./Weather"

const API_KEY = "b2ef7b3ccbdb6c1a8cfc6cc6b959fd92";
export class FetchData extends Component {

    constructor() {
        super()
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
        }
    }

    //========= An onChange event for populating the state(searchCountry)=========  
  /*  componentDidMount() {
        const url = 'https://restcountries.eu/rest/v2/all'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    countries: data
                })
            })
    }*/

    //========= An onChange event for populating the state(searchCountry)=========  
    //  onChange = e => this.setState({ searchCountry: e.target.value });
    onChange = (e) => {
        this.setState({ searchCountry: e.target.value });
        this.setState({ city: e.target.value });
        this.setState({ country: e.target.value });
    };


    //========= An onSubmit event for submitting the state(searchCountry)=========
    onSubmit = (e) => {
        e.preventDefault();
    };

    // ========================= HandleClick event to display weather base search criterea ================================
   /* handleClick = async (e) => {
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
                icon: '',
                temperature: '',
                city: '',
                country: '',
                humidity: '',
                description: '',
                error: "Please enter city and country details correctly"
            });
        }
    }*/


    render() {

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
                    <form className='form' onSubmit={this.handleClick}>
                        <div>
                        <input
                            id=""
                            placeholder="Search Countries"
                            type="text"
                            onChange={this.onChange}
                            value={this.state.searchCountry}
                        />
                      <div><button className="btn_btn--startwithname" onChange={this.handleClick}>Get Weather</button></div>
                       </div>
                    </form>
                </div>
                <div className='container_first'>
                 
                </div>
            </div>
        )
    }
}

export default FetchData
