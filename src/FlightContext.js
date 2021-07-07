import React, {useState, createContext} from 'react'

export const FlightContext = createContext(); 

export const FlightProvider = props => {
    const [flights, setFlights] = useState([
        {
            date: 'July 4, 2021',
            id: 13214, 
            description: 'Took off from Gudata at 1:30 and flew to the CAP point at 345. Encountered a single MiG in the contrails and engaged at 35,000ft. Fought until deck and MiG crashed into a mountain. Low of fuel, I returned to Sochi airfield.',
            kills: 1, 
            wingmen: 0, 
        }, 
        {
            date: 'July 3, 2021', 
            id: 13213, 
            description: 'Flew in a two-ship with BabyFace. Took off from Gudata without external tanks. 1 MiG-15 had been spotted north of the Bullseye so we flew heading 345 towards the Bullseye. We encountered a singleton MiG-15bis whereupon we engaged. I followed the MiG15 to the deck in a series of tight, one circles, with the MiG slowly gaining advantage because of its superior sustained turn rate. Whereupon, I instructed my no. 2 to stay on the MiG, and I exited the circle fight to regain energy. 30 seconds later, I re-entered the circle, slotted behind the MiG, and shot it down. Babyface and I then returned to Gudata. I claim 1 MiG destroyed.', 
            kills: 1, 
            wingmen: 1, 
        }
    ])

    return (
       <FlightContext.Provider value={[flights, setFlights]}>
           {props.children}
       </FlightContext.Provider>
    )
}


