import './App.css'
import Person from "./components/Person.tsx";

function App() {
  return (
    <>
      <Person age={20} isMarried={false} name={'john'} />
    </>
  )
}

export default App
