import {useState} from 'react'

const Counter = () => {
  /* let count = 0 this is javascript version */
  let [currentCount, setCount] = useState(0)

  const increment = () => {
    setCount(currentCount + 1)
  }

  const decrement = () => {
    setCount(currentCount - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return ( /* returning "html" with javascript elements*/
    <div>
      <h2>{currentCount}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter /* exporting container, can access it from other parts of application*/