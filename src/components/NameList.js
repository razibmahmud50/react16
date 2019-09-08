import React from 'react'
import Person from './Person';

function NameList() {
    const persons =[
        {
            name: 'razib',
            id: 1,
            age : 24,
        },
        {
            name: 'habib',
            id: 2,
            age: 24,
        }
    ]
    const personList = persons.map(person=>  <Person key={person.id} person={person}/>)
    return <div>{personList}</div>
}

export default NameList

