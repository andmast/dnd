import React, { Fragment } from "react";
import { bounce } from "react-animations";
import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`${bounce}`;

const BounceDiv = styled.div`
  animation: 1s ${bounceAnimation} infinite;
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Loading = () => {
  return (
    <Fragment>
      <LoadingContainer>
        <BounceDiv>
          <h1>Test</h1>
        </BounceDiv>
        <BounceDiv>
          <h1>Test</h1>
        </BounceDiv>
      </LoadingContainer>
    </Fragment>
  );
};
