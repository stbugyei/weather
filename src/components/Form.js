import React from 'react'

function Form() {
    let weather = 'Get Weather'
    return (
        <div>
            <form className="search">
                <div>
                    <input
                        type="search"
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
                        type="search"
                        name="country"
                        placeholder="Country..." />
                </div>
            </form>
        </div>
    )
}

export default Form
