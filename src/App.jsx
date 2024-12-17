import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Navbar from './components/Navbar'
import { decrement, increment, multiply } from './redux/counter/countersSlice'


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div>
      <Navbar />
        <button onClick={() => dispatch(decrement())}>-</button>
        Currently count is: {count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(multiply())}>*</button> {/*Custom button*/}
      </div>
    </>
  )
}

export default App
