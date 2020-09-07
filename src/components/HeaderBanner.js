import React from 'react'
import TimeInterval from './TimeInterval';
import SocialMedia from './SocialMedia';

function HeaderBanner({countries}) {

    let bannerText = 'WORLD COUNTRY DATA',
        firstParagraghA = 'There are currently',
        firstParagraghB = 'countries',
        secondParagragh = 'Search for your favourite cities and countries.',
        thirdParagragh = 'Get updated weather focust for your favourite cities and countries!'

    return (
        <div className='banner'>
            <div>
                <div className='banner_text'>
                    {bannerText}
                </div>
                <div style={text}>
                    <p> {firstParagraghA} {countries.length} {firstParagraghB}.</p>
                    <p>{secondParagragh}</p>
                    <p>{thirdParagragh}</p>
                </div>
            </div>

            <div style={time}>
                <div><TimeInterval /></div>
                <div><SocialMedia /></div>
            </div>
        </div>
    )
}

export default HeaderBanner

const time = {
    padding: '10px',
    fontSize: '30px',
    color: 'red'
};

const text = {
    marginBottom: '25px',
    fontSize: '18px',
    paddingLeft: '10px',
    color: 'marron'
}
