import React from 'react'

interface Tprops {
    name: string,
    age: number,
    rollno: number,
    class: string
}
const Card = (props: Tprops) => {
    return (
        <div className='bg-slate-300 border-4 border-gray-600 w-60 rounded-lg shadow-lg h-auto p-5'>
            <h1 className='text-xl'><b>Name:</b> {props.name}</h1>
            <h1 className='text-xl'><b>Age:</b> {props.age}</h1>
            <h1 className='text-xl'><b>Rollno:</b> {props.rollno}</h1>
            <h1 className='text-xl'><b>Class:</b> {props.class}</h1>
        </div>
    )
}
export default Card