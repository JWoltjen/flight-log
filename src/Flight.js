import React from 'react'

function Flight({date, plane, id, description}) {
    return (
        <div>
            <h3>{date}</h3>
            <h3>{id}</h3>
            <h3>{plane}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Flight
