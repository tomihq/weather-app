import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCounterStore } from './store'

// ✅ This component updates and displays `counter2`.
// Since it only subscribes to `counter2` and `incrementCounter2`, 
// it will re-render only when those specific parts of the state change.
const OtherComponent = () =>{
  const counter2 = useCounterStore((state) => state.counter2);
  const incrementCounter2 = useCounterStore((state) => state.incrementCounter2);
  return(
    <button onClick={() => incrementCounter2()}>
          Increment Counter2: counter2 is {counter2}
      </button>
  )
}

// ✅ Efficient usage: This component only selects the state it actually needs.
// Changes to `counter2` will not trigger a re-render here,
// since `count`, `increment`, and `incrementAsync` are the only selected values.
function App() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => increment()}>
          count is {count}
        </button>

         <button onClick={() => incrementAsync()}>
          Increment Async: count is {count}
        </button>

        <OtherComponent/>

        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
