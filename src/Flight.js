import React, {useState, useContext} from 'react'
import { FlightContext } from './FlightContext'

function Flight({date, plane, id, description, kills, wingmen}) {
    const [flights, setFlights] = useContext(FlightContext)

    const deleteFlight = () => {
        console.log('you clicked me')
        setFlights(flights.filter((el) => el.id !== flights.id));
  }

    return (
        <div className='flight-card'>
            <h3 className='flight-card-date'>{date}</h3>
            <p className='flight-card-description'>{description}</p>
            <div className='flight-card-stats'>
                {kills}
                {wingmen}
            </div>
            <span className='flight-card-buttons'>
                <button>Edit</button>
                <button onClick={deleteFlight}>Delete</button>
            </span>
        </div>
    )
}

export default Flight
