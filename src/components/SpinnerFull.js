import React from 'react'

function SpinnerFull() {
    return (
        <div className="spin-position">
            <div className="spin">
                <div className="spin-text">Loading</div>
                <div className="spin-sector spin-sector-first"></div>
                <div className="spin-sector spin-sector-second"></div>
                <div className="spin-sector spin-sector-third"></div>
            </div>
        </div>
    )
}

export default SpinnerFull
