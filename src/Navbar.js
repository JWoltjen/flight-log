import React, {useContext} from 'react'
import {FlightContext} from './FlightContext'

function Navbar() {
    const [flights, setFlights] = useContext(FlightContext)
    return (
        <nav>
            <h3>Flight Log</h3>
            <h1>Wolf's Flight Log</h1>
            <p>Number of Flights: {flights.length}</p>
        </nav>
    )
}

export default Navbar
