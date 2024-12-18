import { useDispatch, useSelector } from 'react-redux'; //useSelector is used to read some value & whenever you want you count value in your app you'll have to import these hooks and fun(increment, decrement, etc)
import './App.css';
import Navbar from './components/Navbar';
import { decrement, increment, multiply } from './redux/counter/countersSlice';


function App() {
  const count = useSelector((state) => state.counter.value)   //Read count value (bring count from redux store)
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
