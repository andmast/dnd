import React from "react";
import { merge, bounce, flash } from "react-animations";
import styled, { keyframes } from "styled-components";
const bounceFlash = merge(bounce, flash);

const bounceFlashAnimation = keyframes`${bounceFlash}`;

const BounceFlashDiv = styled.div`
  animation: 5s ${bounceFlashAnimation} infinite;
`;

export const Loading = () => {
  return (
    <BounceFlashDiv>
      <h1>Test</h1>
    </BounceFlashDiv>
  );
};
