import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Content } from "../components/Content";
import { RepositoryItem } from "../components/RepositoryItem";
import { Spinner } from "../components/Spinner";
import { owner, sortOptions } from "../constants";

export function Repositories() {
  const [repositories, setRepositories] = useState<any>([]);
  const url = `https://api.github.com/users/${owner}/repos`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setRepositories(data))
      .catch((e) => console.info(`${e}, Something went wrong...`));
  }, []);

  function sortRepositories(option: string) {
    switch (option) {
      case "Ascending": {
        const sortedRepos = [...repositories].sort((first, second) => {
          return first.name.toLowerCase() > second.name.toLowerCase() ? 1 : -1;
        });
        setRepositories(sortedRepos);
        break;
      }
      case "Descending": {
        const sortedRepos = [...repositories].sort((first, second) => {
          return first.name.toLowerCase() > second.name.toLowerCase() ? -1 : 1;
        });
        setRepositories(sortedRepos);
        break;
      }
    }
  }

  return (
    <Content>
      <StyledSortContainer>
        <h2>{owner}'s repositories</h2>
        <div>
          <span>Sort by</span>
          <StyledDropdown onChange={(e) => sortRepositories(e.target.value)}>
            {sortOptions.map((option, key) => {
              return <option key={key}>{option}</option>;
            })}
          </StyledDropdown>
        </div>
      </StyledSortContainer>
      <StyledContainer>
        {repositories ? (
          repositories.map((item: any, key: number) => {
            const { name, description } = item;
            return (
              <RepositoryItem key={key} repo={name} description={description} />
            );
          })
        ) : (
          <Spinner />
        )}
      </StyledContainer>
    </Content>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledSortContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledDropdown = styled.select`
  height: fit-content;
  margin-left: 1rem;
`;
