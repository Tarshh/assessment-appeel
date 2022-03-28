import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export function Spinner() {
  return <StyledSpinner />;
}

const spin = keyframes`
  from { transform: rotate(0); }
  to { transform: rotate(360deg); }
`;

const StyledSpinner = styled.div`
  position: relative;
  margin: 0.25rem;
  width: 1.25rem;
  height: 1.25rem;
  border: 0.25rem solid black;
  border-radius: 50%;
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 1.75rem;
    height: 1.75rem;
    top: -0.5rem;
    left: -0.5rem;
    border: 0.25rem solid transparent;
    border-left-color: #3b82f6;
    border-radius: 50%;
    animation: ${spin} 0.5s infinite linear;
  }
`;
