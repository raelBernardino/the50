import React from 'react';
import styled from 'styled-components';
import { ButtonLink, Container, Typography } from '../../components/atoms';
import murca2 from '../../murca2.jpg';

const ResultsContainer = styled(Container)`
  position: absolute;
  transform: ${p => p.currentIndex > 49 ? "translateY(0%)" : "translateY(100%)"};
  transition: .5s;
`

export const Results = ({ score, currentIndex, states }) => {
  console.log({ currentIndex })
  return (
    <ResultsContainer states={states} currentIndex={currentIndex} backgroundImage={murca2}
      fDirection="column">
      <Typography weight="900" size="xl" color="white">
        Your Score: {score}
      </Typography>
      <ButtonLink color="white" link="/">
        <Typography weight="900" size="sm" color="white">
          Return Home
      </Typography>
      </ButtonLink>
    </ResultsContainer>
  )
}