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
      <Typography style={{ paddingBottom: "50px" }} color="white" weight="900" size="xl">{name}</Typography>
      <Container
        height="275px"
        width="100%"
        fDirection="column"
        padding="0 0 100px 0">
        {
          options?.map((option, i) => <Button
            backgroundColor="rgba(0, 0, 0, .1)"
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