import styled from 'styled-components';

export const Container = styled.div`
  width: ${p => p.width || "100%"};
  height: ${p => p.height || "100vh"};
  display: flex;
  padding: ${p => p.padding};
  justify-content: ${p => p.jContent || "center"};
  align-items: ${p => p.aItems || "center"};
  flex-direction: ${p => p.fDirection};
  background-image: ${p => `url(${p.backgroundImage})`};
  background-size: cover;
  background-position: center;
`;