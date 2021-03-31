import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const StyledButtonLink = styled.a`
  width: ${p => p.width || "160px"};
  width: ${p => p.width || "160px"};
  height: ${p => p.height || "54px"};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${p => `2px solid ${p.color}`};
  border-radius: 5px;
  margin: 25px 0;
  `;

export const Button = styled.button`
  width: ${p => p.width || "160px"};
  height: ${p => p.height || "54px"};
  color: ${p => p.color};
  background-color: ${p => p.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${p => `1px solid ${p.color}`};
  border-radius: 5px;
  margin: ${p => p.margin || "12px"};
  outline: none;
`;

export const ButtonLink = ({ children, width, height, link, color }) => (
  <Link
    to={link}
    style={{ textDecoration: "none" }}>
    <StyledButtonLink width={width} height={height} color={color}>
      {children}
    </StyledButtonLink>
  </Link>
)