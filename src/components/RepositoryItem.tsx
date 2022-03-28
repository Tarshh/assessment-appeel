import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { ReactComponent as github } from "../assets/images/github.svg";

type Props = {
  repo: string;
  description: string;
};

export function RepositoryItem({ repo, description }: Props) {
  return (
    <StyledContainer>
      <StyledTitleContainer>
        <StyledGithubLogo />
        <p>{repo}</p>
      </StyledTitleContainer>
      <StyledSubtext>{description}</StyledSubtext>
      <StyledLink to={`commits/${repo}`}>Go to commits</StyledLink>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  padding: 1rem;
  min-width: 15rem;
  max-width: 30rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(59, 130, 246, 0.2);
  border-radius: 0.5rem;
  margin: 1rem 0 1rem 0;
  &:hover {
    background-color: rgba(59, 130, 246, 0.3);
  }
`;

const StyledTitleContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.4rem;
  margin: 0;
`;
const StyledGithubLogo = styled(github)`
  max-width: 1.5rem;
`;

const StyledSubtext = styled.p`
  color: #666666;
`;
const StyledLink = styled(Link)`
  width: fit-content;
`;
