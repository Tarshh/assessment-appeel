import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Content } from "../components/Content";
import { Spinner } from "../components/Spinner";
import { owner } from "../constants";

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
          <StyledSearchInput
            onChange={(e) => setFilter(e.target.value.toLowerCase())}
          />
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
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledSearchInput = styled.input`
  height: fit-content;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  margin: 0 auto;
  justify-content: center;
`;

const StyledCommitContainer = styled.div`
  background-color: rgba(59, 130, 246, 0.2);
  border: 1px solid #303630;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const StyledCommitTitle = styled.p`
  font-size: 1.4rem;
`;

const StyledCommitMessage = styled.p`
  color: #666666;
`;
