import React, {useState} from 'react'

const AddFlight = () => {

    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')

    const updateName = e => {
        setDescription(e.target.value)
    }
    const updateDate = e => {
        setDate(e.target.value)
    }
    return (
       <form>
           <input type='date' name='date' value={date} onChange={updateDate}/>
           <input type='text' name='description' value={description} onChange={updateName}/>
           <button>Submit</button>
       </form>
    )
}

export default AddFlight
