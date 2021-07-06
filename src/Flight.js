import React from 'react'

function Flight({date, plane, id, description}) {
    return (
        <div className='flight-card'>
            <h3 className='flight-card-date'>{date}</h3>
            <p className='flight-card-description'>{description}</p>
            <span className='flight-card-buttons'>
                <button>Add</button>
                <button>Edit</button>
                <button>Delete</button>
            </span>
        </div>
    )
}

export default Flight
