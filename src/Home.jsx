import React from 'react'

function Home() {
  return (
    <div className=' mt-24 m-10 h-72 w-10/11 bg-blue-700 rounded flex flex-col justify-center items-center text-white shadow-md shadow-blue-700'>
         <h1 className='text-center font-bold text-2xl mb-2 '>Start the Quiz</h1>
         <p className='mb-2'>Good luck!</p>
         <p className='mb-4'>Time : 60sec</p>
         <button className=' border-2 bg-blue-950 p-2 rounded-xl font-semibold'>START</button>
    </div>
  )
}

export default Home