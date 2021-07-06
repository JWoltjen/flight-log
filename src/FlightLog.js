import React, {useState, useContext} from 'react'
import Flight from './Flight'
import {FlightContext} from './FlightContext'

function FlightLog() {
    const [flights, setFlights] = useContext(FlightContext)

    return (
        <div className='flight-log'>
           {flights.map(flight => (
               <Flight date={flight.date} plane={flight.plane} id={flight.id} description={flight.description} />
           ))}
        </div>
    )
}

export default FlightLog
