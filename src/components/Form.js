import React from 'react'

function Form() {
    let weather = 'Get Weather'
    return (
        <div>
            <form className="search">
                <div>
                    <input
                        type="text"
                        name="city"
                        autoComplete='on'
                        placeholder="City/Country" />
                    <button
                        className="btn">
                        {weather}
                    </button>
                </div>
                <div>
                    <input
                        className="hidecountry"
                        type="text"
                        name="country"
                        placeholder="Country..." />
                </div>
            </form>
        </div>
    )
}

export default Form
