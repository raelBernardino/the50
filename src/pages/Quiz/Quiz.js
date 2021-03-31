import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Question } from './Question';
import { useRecoilValue } from 'recoil';
import { fiftyStates } from '../../atoms'
import murca from '../../murca.jpg'
import { Results } from './Results';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${murca});
  background-size: cover;
  background-position: center;
  overflow-y: hidden;
  position: relative;
`;

const QuestionsContainer = styled.div`
  width: auto;
  height: 100%;
  position: absolute;
  top: 0;
  transform: ${p => `translateY(${p.currentIndex * -100}vh)`};
  transition: .3s;
  `;

export const Quiz = () => {
  const states = useRecoilValue(fiftyStates)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [options, setOptions] = useState()


  const removeUsedState = (filteredStates, randomIndex) => {
    return filteredStates.filter(s => s.name !== filteredStates[randomIndex].name)
  }

  const checkAnswer = (option) => {
    if (option.isCorrect) setScore(score + 1)
    if (currentIndex < states.length) setCurrentIndex(currentIndex + 1)
  }

  useEffect(() => {
    const randomizeOptions = () => {
      if (currentIndex < states.length) {

        let filteredStates = states.filter(s => s.name !== states[currentIndex].name)
        let tempOptions = []

        const shuffle = (arr) => {
          for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
        }

        for (let i = 0; i < 2; i++) {
          const randomIndex = Math.floor(Math.random() * filteredStates.length);
          tempOptions.push({ capital: filteredStates[randomIndex].capital, isCorrect: false })
          filteredStates = removeUsedState(filteredStates, randomIndex)
        }

        tempOptions.push({ capital: states[currentIndex].capital, isCorrect: true })
        shuffle(tempOptions)
        setOptions([...tempOptions])
      }
    }
    randomizeOptions()
  }, [currentIndex, states])

  return (
    <Container backgroundImage={murca}>
      <QuestionsContainer currentIndex={currentIndex}>
        {
          states.map((s, i) => <Question
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            options={options}
            americanState={s}
            checkAnswer={checkAnswer}
          />
          )
        }
      </QuestionsContainer>
      <Results states={states} score={score} currentIndex={currentIndex} />
    </Container>
  )
}
