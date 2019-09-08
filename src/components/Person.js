import React from 'react'

function Person({person}) {
    return (
        <div>
           <h3> i am{person.name}. my Id is{person.id}. age is {person.age}</h3>
        </div>
    )
}

export default Person
