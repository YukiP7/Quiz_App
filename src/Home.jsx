import React, { useEffect , useState } from 'react'
import App from './App'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [click , setClick] = useState(false)

  const navigate = useNavigate() ;
  useEffect(() => {
    if(click){
      navigate('/quiz:id') 
    }
  } , [click])
  
  return (
    <>
      <App/>
     <div className=' mt-24 m-10 h-72 w-10/11 bg-blue-700 rounded flex flex-col justify-center items-center text-white shadow-md shadow-blue-700'>
         <h1 className='text-center font-bold text-3xl mb-4 '>Start the Quiz</h1>
         <p className='mb-2'>Good luck!</p>
         <p className='mb-4'>Time : 60 sec</p>
         <button 
         className=' border-2 bg-blue-950 p-2 rounded-xl font-semibold hover:bg-white hover:text-blue-700 shadow-sm hover:border-blue-950 text-xl mt-5'
         onClick={() => setClick(true)}>START</button>
    </div>
    </>
   
  )
}

export default Home