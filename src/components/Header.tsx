import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactComponent as logo } from "../assets/images/appeel.svg";
import { forBreakpoint } from "../utils/forBreakpoint";

export function Header() {
  return (
    <StyledContainer>
      <StyledLogo />
      <StyledTitle>Appeel assessment</StyledTitle>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  ${forBreakpoint(
    "tablet",
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `
  )}
`;

const StyledTitle = styled.h1`
  color: #3b82f6;
`;

const StyledLogo = styled(logo)`
  max-width: 12rem;
`;
