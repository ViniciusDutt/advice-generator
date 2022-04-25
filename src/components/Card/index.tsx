import React, {useState, useEffect} from 'react'
import {Container, Line, PauseIcon, DiceIcon, Circle} from './styles'

type Main = {
  slip: {id: number, advice: string}
}






export default function Card() {

  const [advice, setAdvice] = useState<Main|undefined>(undefined)

  useEffect(() => {
    async function loadAdvices() {
      const response = await fetch('https://api.adviceslip.com/advice' ,{
        method: 'GET'
      });
      const advices = await response.json();
      setAdvice(advices)
    }

    loadAdvices()
 
  }, [])


  return (
    <Container>
      <h3>advice #{advice?.slip.id}</h3>
      <p>"{advice?.slip.advice}"</p>
      <Line>
        <hr />
        <PauseIcon />
        <hr />
      </Line>
      <Circle>
        <DiceIcon />
      </Circle>
    </Container>
  )
}
