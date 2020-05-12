import React from 'react'


function DisplayCountries({ countries, searchCountry }) {

    let name = 'Name:',
        capital = 'Capital:',
        language = 'Language:',
        population = 'Population:',
        currency = 'Currency:',
        time = 'Time:'

    //========= Making a search filter by name and city========= 

    const SearchCountriesOptions = countries.filter((country) =>
        country.name.toLowerCase().includes(searchCountry.toLowerCase()) || country.capital.toLowerCase().includes(searchCountry.toLowerCase())
    );

    //========= Displaying the SearchCountriesOptions =========  

    const ShowCountriesList = SearchCountriesOptions.map(country => (
        <div className='container_first--item'
            key={country.name}>
            <img style={img} src={country.flag} alt='' />
            <p>{name} {country.name} </p>
            <p>{capital} {country.capital}</p>
            <p>{language} {`${country.languages.map(l => `${l.name}`)}`}</p>
            <p>{population} {country.population.toLocaleString('en-US')}</p>
            <p>{currency} {`${country.currencies.filter(c => c.name).map(c => `${c.name} (${c.code})`).join(' ,')}`}</p>
            <p>{time} {country.timezones} </p>
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

