import React, {useState, useContext} from 'react'
import {FlightContext} from './FlightContext'

const AddFlight = () => {

    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [flights, setFlights] = useContext(FlightContext)

    const updateName = e => {
        setDescription(e.target.value)
    }
    const updateDate = e => {
        setDate(e.target.value)
    }
    const addFlight = e => {
        e.preventDefault()
        setFlights(flights => (
            [...flights, {date: date, description: description} ]
        ))
    }
    return (
       <form onSubmit={addFlight} className='add-flight'>
           <input type='date' className='add-flight-date' name='date' value={date} onChange={updateDate}/>
           <input type='text' className='add-flight-description' name='description' value={description} onChange={updateName}/>
           <button className='add-flight-button'>Submit</button>
       </form>
    )
}

export default AddFlight
