import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardInfo from './assets/cardInfo'
import Main from './assets/cardMain'
import Image from './assets/cardPhoto'
import Footer from './assets/footer'



function App() {
  
  return (
    
    <div className='container'>
      <Image />
      <div className='card-info'>
    <CardInfo />
    <Main />
    </div>
    <Footer />
    </div>
    
  )
}

export default App
