import React from 'react'
import bigIron from './BigIron.png'

function Logo() {
    return (
        <div className='flight-log-logo'>
            <img className='logo' src={bigIron} alt='a mig and a sabre merge at very very close range'/>
        </div>
    )
}

export default Logo
