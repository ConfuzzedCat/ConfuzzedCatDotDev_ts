import { useState } from 'react'
import TitleAsciiArt from './components/TitleAsciiArt'
import './App.css'
import Spacer from './components/Spacer'

function App() {
  const [count, setCount] = useState(0)

  return (  
    <>
      <TitleAsciiArt/>
      <div className="TextCenter TextContent JetBrainMono">
        <h2>
          Welcome
        </h2>
          <span className="RoutesLinks">About me</span>
          <Spacer/>
          <span className="RoutesLinks">Links</span>
          
      </div>
    </>
  )
}

export default App
