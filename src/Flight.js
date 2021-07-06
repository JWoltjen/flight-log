import React, {useState, useContext} from 'react'
import { FlightContext } from './FlightContext'

function Flight({date, plane, id, description}) {
    const [flights, setFlights] = useContext(FlightContext)

    const deleteFlight = () => {
        console.log('you clicked me')
        setFlights(flights.filter((el) => el.id !== flights.id));
  }

    return (
        <div className='flight-card'>
            <h3 className='flight-card-date'>{date}</h3>
            <p className='flight-card-description'>{description}</p>
            <span className='flight-card-buttons'>
                <button>Add</button>
                <button>Edit</button>
                <button onClick={deleteFlight}>Delete</button>
            </span>
        </div>
    )
}

export default Flight
