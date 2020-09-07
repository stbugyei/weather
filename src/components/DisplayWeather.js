import React from 'react';
import Spinner from './Spinner'
import Cloud from './images/clouds.jpg'
import Clear from './images/clear.jpg'
import Snow from './images/snow.jpg'
import Rain from './images/rain_light.jpg'

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


    const changeBackgroundImg = () => {

        if (clear === 'Clouds') {
            return Cloud

        } else if (clear === 'Snow') {
            return Snow
        }

        else if (clear === 'Rain') {
            return Rain
        }
        else if (clear === 'Drizzle') {
            return Rain
        }
        else if (clear === 'Thunderstorm') {
            return Cloud
        }
        else if (clear === 'Clear') {
            return Clear
        }
        return Clear
    }

    console.log(error)
    return (

        <div className='weather_details' style={{ backgroundImage: `url(${changeBackgroundImg()})` }}>
            <div className='weather-wrapper_content'>
                <div className='weather-wrapper_img'>
                    <div>
                        <img className='avatar' src={`http://openweathermap.org/img/w/${icon}.png`} alt='img' />
                    </div>
                    <p style={pStyle1}>{clear}</p>
                </div>
            </div>
            <div className='weather-wrapper_content'>
                <div className='temperature_wrapper'>
                    <div className='temperature'>
                        <p>temperature</p>
                        <span style={temp}>
                            {loading ? <Spinner /> : <p>{temperature}°C</p>}
                        </span>
                        <p style={{ fontSize: '14px' }}>{temp_min}°C -  {temp_max}°C</p>
                        <p style={{ fontSize: '10px' }}>min - max</p>
                    </div>

                </div>
            </div>
            <div className='weather-wrapper_content'>
                <p>humidity</p>
                {loading ? <Spinner /> : <p style={pStyle}> {humidity}%</p>}

            </div>
            <div className='weather-wrapper_content'>
                <p>city/country</p>
                {loading ? <Spinner /> : <p style={pStyle2}>{city}</p>}

            </div>
            <div className='weather-wrapper_content'>
                <p>country</p>
                {loading ? <Spinner /> : <p style={pStyle}>{country}</p>}

            </div>
            <div className='weather-wrapper_content'>
                <p>description</p>
                {loading ? <Spinner /> : <p style={pStyle2}> {description} </p>}

            </div>
            <span style={errormsg}>{error}</span>
        </div>
    )
}

export default DisplayWeather

const temp = {
    fontSize: '45px',
    textAlign: "center",
    fontWeight: '600',
    color: '#ff0000',
    textShadow: '0 3px 6px rgb(59, 62, 65)'

}

const pStyle = {
    color: '#fff',
    fontSize: '25px',
    marginTop: '25px',
    textAlign: 'center',
    textShadow: '0 3px 6px rgb(59, 62, 65)'
};

const pStyle1 = {
    color: '#fff',
    fontSize: '25px',
    textAlign: 'center',
    textShadow: '0 3px 6px rgb(59, 62, 65)'
};

const pStyle2 = {
    color: '#ff0000',
    fontSize: '30px',
    marginTop: '30px',
    textAlign: 'center',
};

const errormsg = {
    color: 'blue',
    fontSize: '20px',
    marginTop: '30px',
    textAlign: 'center',
};
