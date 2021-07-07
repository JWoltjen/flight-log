import React, {useState, createContext, useEffect} from 'react'

export const FlightContext = createContext(); 

export const FlightProvider = props => {
    const initialState = JSON.parse(localStorage.getItem('flights')) ||
    [
        {date: 'July 4, 2021', 
        description: 'this is a test', 
        id: 1232,
        kills: 0, 
        wingmen: 0, 
        losses: 0}
    ]

    const [flights, setFlights] = useState(initialState)
    
    useEffect(() => {
        localStorage.setItem("flights", JSON.stringify(flights))
    }, [flights])

    return (
       <FlightContext.Provider value={[flights, setFlights]}>
           {props.children}
       </FlightContext.Provider>
    )
}


