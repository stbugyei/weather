import React from 'react'


function DisplayCountries({ countries, searchCountry }) {

    //========= Making a search filter by name and city========= 

    const SearchCountriesOptions = countries.filter((country) =>

        country.name.toLowerCase().includes(searchCountry.toLowerCase()) || country.capital.toLowerCase().includes(searchCountry.toLowerCase()) || `${country.languages.map(lan => `${lan.name}`)}`.toLowerCase().includes(searchCountry.toLowerCase())
    );

    //========= Randomizing the SearchCountriesOptions ========= 
    const Randomizer = SearchCountriesOptions.sort(() => Math.random() - 0.5)
    

    //========= Limiting the display of the countries to only four on window load ========= 
    const LimitedDisplay = Randomizer.slice(0, 4)


    //========= Displaying the SearchCountriesOptions =========  
    const ShowCountriesList = LimitedDisplay.map(country => (
        <div className='container_first--item'
            key={country.name}>

            <h2 className='name-font'>{country.name}</h2>

            <div className='wrapper-img'>
                <img src={country.flag} alt='' />
            </div>

            <div className="wrapper-text">
                <h2 className='hide-country'>{country.name}</h2>
                <p>Capital: {country.capital}</p>
                <p>Language: {`${country.languages.map(lan => `${lan.name}`)}`}</p>
                <p>Population: {country.population.toLocaleString('en-US')}</p>
                <p>Currency: {`${country.currencies.filter(count => count.name).map(count => `${count.name} (${count.code})`).join(' ,')}`}</p>
                <p>Time: {country.timezones} </p>
            </div>
        </div>
    ))


    return (

        <div className='container_first'>
            {ShowCountriesList}
        </div>
    )
}

export default DisplayCountries


const img = {
    width: '100%',
    paddingBottom: '10px'
};

