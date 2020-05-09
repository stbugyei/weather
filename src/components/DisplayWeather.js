import React from 'react';
import Spinner from './Spinner'

function DisplayWeather({ icon,
    clear,
    temperature,
    temp_min,
    temp_max,
    humidity,
    city,
    country,
    description,
    error,
    loading }) {

    return (

        <div className='weather_wrapper'>
            <div className='weather_details'>
                <div className='weather-wrapper_img'>
                    <div>
                        <img className='avatar' src={`http://openweathermap.org/img/w/${icon}.png`} alt='img' />
                    </div>
                    <p style={pStyle1}>{clear}</p>
                </div>
                <div className='weather-wrapper_content'>
                    <div className='temperature_wrapper'>

                        <div className='weather_min-max'>
                            <div>
                                <p style={{ fontSize: '10px' }}>min</p>
                                <p>{temp_min}&#xb0;</p>
                            </div>
                            <div>
                                <p style={{ fontSize: '10px' }}>max</p>
                                <p> {temp_max}&#xb0;</p>
                            </div>
                        </div>
                        <div className='temperature'>
                            <p>temperature</p>
                            <span style={temp}>
                                <p>{temperature}&#xb0;</p>
                                {/* {loading ? <Spinner /> : <p>{temperature}&#xb0;</p>} */}
                            </span>
                        </div>

                    </div>
                </div>
                <div className='weather-wrapper_content'>
                    <p>humidity</p>
                    <p style={pStyle}> {humidity}&#37;</p>
                </div>
                <div className='weather-wrapper_content'>
                    <p>city/country</p>
                    <p style={pStyle2}>{city} </p>
                </div>
                <div className='weather-wrapper_content'>
                    <p>country</p>
                    <p style={pStyle}>{country} </p>
                </div>
                <div className='weather-wrapper_content'>
                    <p>description</p>
                    <p style={pStyle2}> {description}</p>
                </div>
                <p>{error}</p>
            </div>
        </div>
    )
}

export default DisplayWeather

const temp = {
    fontSize: '50px',
    textAlign: "right",
    fontWeight: 'bold',
    color: 'red'
}

const pStyle = {
    color: 'white',
    fontSize: '25px',
    marginTop: '30px',
    textAlign: 'center'
};

const pStyle1 = {
    color: 'white',
    fontSize: '20px',
    textAlign: 'center'
};

const pStyle2 = {
    color: 'red',
    fontSize: '25px',
    marginTop: '30px',
    textAlign: 'center'
};
