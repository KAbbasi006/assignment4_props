import React from 'react'
import Card from './props/card'

function Home() {
  return (
    <div className='flex flex-col items-center justify-center space-y-5   min-h-screen'>

      <Card name='Komal' age={25} rollno={1234} class='Monday' /><br />
      <Card name='Maheen' age={19} rollno={4567} class='Wednesday' /><br />
      <Card name='Sana' age={20} rollno={7890} class='Friday' />

    </div>
  )
}

export default Home