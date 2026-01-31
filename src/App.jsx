import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Card =({ title }) => {
  return (
    <div className="card" >
      <h2>{title}</h2>
    </div>  
  )
}


const App = () => {
  return (
    <div classname= "card-container">
      <Card title="Star Wars" rating= {5} isCool={true} />
      <Card title="Avater" />
      <Card title="The Lion King" />
    </div>
    
  )
}

export default App
