
import Header from '@/components/header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <div className='grid-background'></div>
      <main className='min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        <Header/>

      <Outlet/>
      </main>
      <div className='p-10 text-center bg-gray-900 mt-10 text-white'> 
         Made with 💓 by Balkaran Singh Bains
      </div>

      
     
    </div>
  )
}

export default AppLayout