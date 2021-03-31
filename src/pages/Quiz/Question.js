import React from 'react';
import { } from 'recoil';
import {
  Typography,
  Container,
  Button
} from '../../components/atoms';
export const Question = ({
  americanState,
  options,
  checkAnswer
}) => {
  const { name } = americanState

  return (
    <Container
      width="100vw"
      jContent="flex-end"
      fDirection="column">
      <Typography color="white" weight="900" size="xl">{name}</Typography>
      <Container
        height="275px"
        width="100%"
        fDirection="column"
        padding="0 0 50% 0">
        {
          options?.map((option, i) => <Button
            backgroundColor="transparent"
            color="white"
            onClick={() => checkAnswer(option)}
            width="80%">
            <Typography key={i} color="white" size="md" weight="900">{option.capital}</Typography>
          </Button>
          )
        }
      </Container>
    </Container>
  )
}