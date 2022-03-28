import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Header } from "./Header";

type Props = {
  children?: ReactNode;
};

export function Content({ children }: Props) {
  return (
    <StyledContent>
      <Header />
      {children}
    </StyledContent>
  );
}

const StyledContent = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background-color: #f6f6f5;
`;
