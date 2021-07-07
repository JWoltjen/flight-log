import React, {useState, useContext} from 'react'
import {FlightContext} from './FlightContext'

const AddFlight = () => {

    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')
    const [kills, setKills] = useState(0)
    const [wingmen, setWingmen] = useState(0)
    const [losses, setLosses] = useState(0)
    const [flights, setFlights] = useContext(FlightContext)

    const updateName = e => {
        setDescription(e.target.value)
    }
    const updateDate = e => {
        setDate(e.target.value)
    }
    const updateKills = e => {
        setKills(e.target.value)
    }
    const updateWingmen = e => {
        setWingmen(e.target.value)
    }
      const updateLosses = e => {
        setLosses(e.target.value)
    }
    const addFlight = e => {
        e.preventDefault()
        setFlights(flights => (
            [...flights, 
                {date: date, 
                description: description, 
                kills: kills, 
                wingmen: wingmen, 
                losses: losses} ]
        ))
    }
    return (
       <form onSubmit={addFlight} className='add-flight'>
           <input type='date' className='add-flight-date' name='date' value={date} onChange={updateDate}/>
           <input type='text' className='add-flight-description' name='description' placeholder="enter description" value={description} onChange={updateName}/>
             <span className='add-flight-kills'>
                <label for="kills">Kills</label>
                <input type='number' id='kills' name='kills' min='0' max='5' value={kills} onChange={updateKills}/>
                <label for='wingmen'>Wingmen</label>
            <input type='number' id='wingmen' name='wingmen' min='0' max='4' value={wingmen} onChange={updateWingmen}/>
                <label for='losses'>Losses</label>
            <input type='number' id='losses' name='losses' min='0' max='4' value={losses} onChange={updateLosses}/>
            </span>
           <button className='add-flight-button'>Submit</button>
       </form>
    )
}

export default AddFlight
