import React, {useState, createContext} from 'react'

export const FlightContext = createContext(); 

export const FlightProvider = props => {
    const [flights, setFlights] = useState([
        {
            date: 'July 4, 2021',
            plane: 'Sabre', 
            id: 13214, 
            description: 'I flew a plane from Gudata to the Bullseye and back.'
        }, 
        {
            date: 'July 3, 2021', 
            plane: 'Sabre',
            id: 13213, 
            description: 'I flew a Sabre from Gudata to Sochi and back again.'
        }
    ])

    return (
       <FlightContext.Provider value={[flights, setFlights]}>
           {props.children}
       </FlightContext.Provider>
    )
}


