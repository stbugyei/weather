import React from 'react'

export default function Spinner() {
    return (
        <div className="spinner-position">
            <div className="spinner">
                <div className="spinner-text">Loading</div>
                <div className="spinner-sector spinner-sector-orange"></div>
                <div className="spinner-sector spinner-sector-lightblue"></div>
                <div className="spinner-sector spinner-sector-blue"></div>
            </div>
        </div>

    )
}
