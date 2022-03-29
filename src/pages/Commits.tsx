import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Content } from "../components/Content";
import { Spinner } from "../components/Spinner";
import { owner } from "../constants";
import { forBreakpoint } from "../utils/forBreakpoint";

export function Commits() {
  const [commits, setCommits] = useState<any[]>();
  const [filter, setFilter] = useState<String>("");
  const perPage = 20;
  const { repo } = useParams();
  const url = `https://api.github.com/repos/${owner}/${repo}/commits?per_page=${perPage}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCommits(data))
      .catch((e) => console.info(`${e}, Something went wrong...`));
  });

  return (
    <Content>
      <StyledContainer>
        <StyledHeaderContainer>
          <h2>{repo}</h2>
          <div>
            <StyledSpan>Search through commits</StyledSpan>
            <StyledSearchInput
              onChange={(e) => setFilter(e.target.value.toLowerCase())}
            />
          </div>
        </StyledHeaderContainer>
        {commits ? (
          commits
            .filter(
              (c) =>
                c.commit.message.toLowerCase().includes(filter) ||
                c.commit.author.name.toLowerCase().includes(filter)
            )
            .map((c, key) => {
              const { name } = c.commit.author;
              const { message } = c.commit;
              return (
                <StyledCommitContainer key={key}>
                  <StyledCommitTitle>{name}</StyledCommitTitle>
                  <StyledCommitMessage>{message}</StyledCommitMessage>
                </StyledCommitContainer>
              );
            })
        ) : (
          <Spinner />
        )}
      </StyledContainer>
    </Content>
  );
}

const StyledHeaderContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  ${forBreakpoint(
    "tablet",
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;
    `
  )}
`;

const StyledSpan = styled.span`
  margin-right: 1rem;
`;

const StyledSearchInput = styled.input`
  height: fit-content;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50rem;
  margin: 0 auto;
`;

const StyledCommitContainer = styled.div`
  background-color: rgba(59, 130, 246, 0.2);
  border: 1px solid #303630;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;
`;

const StyledCommitTitle = styled.p`
  font-size: 1.4rem;
`;

const StyledCommitMessage = styled.p`
  color: #666666;
`;
