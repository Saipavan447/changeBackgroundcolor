import {useState} from 'react'

import {
  MainContainer,
  IncrementButton,
  DecrementButton,
  Counter,
  ButtonContainer,
} from './styledComponents'

function Unlock() {
  const [count, setCount] = useState(0)

  const [greenBackground, setGreenBackground] = useState('#252525')

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
    const randomColors = `#` + Math.random().toString(16).substr(-6)
    setGreenBackground(randomColors)
  }

  const decrementCount = () => {
    setCount(prevCount => prevCount - 1)
    const randomColors = `#` + Math.random().toString(16).substr(-6)
    setGreenBackground(randomColors)
  }

  return (
    <MainContainer style={{backgroundColor: `${greenBackground}`}}>
      <Counter>{count}</Counter>
      <ButtonContainer>
        <IncrementButton onClick={incrementCount}>+</IncrementButton>
        <DecrementButton onClick={decrementCount}>-</DecrementButton>
      </ButtonContainer>
    </MainContainer>
  )
}

export default Unlock
