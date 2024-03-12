import './App.css'
import Count from './components/Count'
import { useDispatch } from 'react-redux'
function App() {
  const dispatch = useDispatch()

  return (
    <>
      <button onClick={ e => dispatch({ type: "INCREMENT" }) }>+</button>
      <Count></Count>
      <button onClick={ e => dispatch({ type: "DECREMENT" }) }>-</button>
    </>
  )
}

export default App
