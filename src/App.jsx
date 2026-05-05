import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import A1 from './Components/A1'
import A2 from './Components/A2'
import UseEffect from './Components/UseEffect'

function App() {
  const [Color, setColor] = useState('white')

  const data = "This is the props data from App file for A1"
  const data1 = "This is the props data from App file for A2"

  return (
    <div style={{
      backgroundColor : Color,
      color : "black",
      height : "100vh",
    }}>
      <A1 data={data} />
      <A2 data={data1} />
      
      {/* <button onClick={() => setColor('blue')}>Blue</button>
      <button onClick={() => setColor('green')}>Green</button>
      <button onClick={() => setColor('yellow')}>Yellow</button>
      <button onClick={() => setColor('orange')}>Orange</button>
      <button onClick={() => setColor('purple')}>Purple</button> */}


      <button type="button" class="btn btn-primary"  onClick={() => setColor('blue')}>Blue</button>
<button type="button" class="btn btn-secondary" onClick={() => setColor('grey')}>Grey</button>
<button type="button" class="btn btn-success" onClick={() => setColor('green')}>Green</button>
<button type="button" class="btn btn-danger" onClick={() => setColor('red')}>Red</button>
<button type="button" class="btn btn-warning" onClick={() => setColor('yellow')}>Yellow</button>
<button type="button" class="btn btn-info" onClick={() => setColor('lightblue')}>Light Blue</button>
<button type="button" class="btn btn-dark" onClick={() => setColor('black')}>Dark</button>

<h3>Below is UseEffect Examples: </h3>
<UseEffect/>
    </div>
  )
}

export default App