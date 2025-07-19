import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCounterStore } from './store'

// ✅ This component efficiently subscribes only to the specific parts of the state it needs.
// By selecting only `counter2` and `incrementCounter2`, it avoids unnecessary re-renders.
const OtherComponent = () =>{
  const counter2 = useCounterStore((state) => state.counter2);
  const incrementCounter2 = useCounterStore((state) => state.incrementCounter2);
  return(
    <button onClick={() => incrementCounter2()}>
          Increment Counter2: counter2 is {counter2}
      </button>
  )
}

// ⚠️ Not ideal: This component subscribes to the entire store state,
// causing it to re-render even when unrelated parts of the state change.
// A better approach would be to select only `count`, `increment`, and `incrementAsync`.
function App() {
  const state = useCounterStore();
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
        <button onClick={() => state.increment()}>
          count is {state.count}
        </button>

         <button onClick={() => state.incrementAsync()}>
          Increment Async: count is {state.count}
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
