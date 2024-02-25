import YOUTUBER_DATA from './data/data.js';
import './App.css'


function App() {

  return (
    <>
      <h1>Example</h1>
      {YOUTUBER_DATA.map((value, i) => {
        return (
          <div key={i}>
            <h1>{value.name}</h1>
            <h3>{value.subscribers}</h3>
            <img src={value.img} alt="" />
          </div>

        )
      })}
    </>
  )
}

export default App
