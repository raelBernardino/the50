import React from 'react';
// import styled from 'styled-components';
import {
  Typography,
  Container,
  ButtonLink
} from '../../components/atoms'
import murca from '../../murca.jpg'

export const Home = () => {
  return (
    <Container
      backgroundImage={murca}
      fDirection="column"
    >
      <Typography
        style={{
          textShadow: "2px .5px rgba(0,0,0, .5)",
          marginTop: "5px"
        }}
        weight="500"
        size="xxl"
        color="white">
        States
        </Typography>
      <Typography
        style={{
          textShadow: "2px 1px rgba(0,0,0, .5)"
        }}
        weight="500"
        size="xxl"
        color="white">
        Capitals
        </Typography>
      <ButtonLink color="white" link="/quiz">
        <Typography
          weight="500"
          size="md"
          color="white">
          Quiz
        </Typography>
      </ButtonLink>
    </Container>
  )
}
