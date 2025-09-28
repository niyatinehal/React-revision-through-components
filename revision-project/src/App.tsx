import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ChipsInput } from './Questions/Chips Input/ChipsInput'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <ChipsInput/>
  </div>
  )
}

export default App
