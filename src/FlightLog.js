import React, {useState, useEffect, useContext} from 'react'
import Flight from './Flight'
import {FlightContext} from './FlightContext'

function FlightLog() {
    const [flights, setFlights] = useContext(FlightContext)

    useEffect(() => {
         return (
            <div className='flight-log'>
                {/*getfrom local storage*/}
            {flights.map(flight => (
                <Flight date={flight.date} id={flight.id} description={flight.description} kills={flight.kills} wingmen={flight.wingmen} losses={flight.losses} />
            ))}
            </div>
    )
    }, [flights])

    return (
            <div className='flight-log'>
            {flights.map(flight => (
                
                <Flight date={flight.date} id={flight.id} description={flight.description} kills={flight.kills} wingmen={flight.wingmen} losses={flight.losses} />
            ))}
            </div>
    )
}

export default FlightLog
