import React, { useRef, useState } from 'react'
import People from './People'
import PersonForm from './PersonForm'

const App = () => {
    const ref = useRef(null)
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [people, setPeople] = useState(([] as any))

    const onPersonChange = (data: any) => {
        console.log('Receiving data from PersonForm')
        console.log(data)
        setName(data.name)
        setAge(data.age)
    }
    const onSubmitForm = (data: any) => {
        console.log('Submit with data')
        console.log(data)
        if (name && age) {
            setPeople([...people, { name, age }])
        }
    }
    return (
        <div className='container'>
            <PersonForm ref={ref} onChange={onPersonChange}></PersonForm>
            <div className='form-row'>
                <button className='btn btn-primary' onClick={onSubmitForm}>Submit</button>
            </div>
            <People people={people}></People>
        </div>
    )
}

export default App