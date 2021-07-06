import React, {useState, useEffect, useContext} from 'react'
import Flight from './Flight'
import {FlightContext} from './FlightContext'

function FlightLog() {
    const [flights, setFlights] = useContext(FlightContext)

    useEffect(() => {
         return (
            <div className='flight-log'>
            {flights.map(flight => (
                <Flight date={flight.date} plane={flight.plane} id={flight.id} description={flight.description} />
            ))}
            </div>
    )
    }, [flights])

    return (
            <div className='flight-log'>
            {flights.map(flight => (
                <Flight date={flight.date} plane={flight.plane} id={flight.id} description={flight.description} />
            ))}
            </div>
    )
}

export default FlightLog
