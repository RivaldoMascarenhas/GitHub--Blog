import styled from "styled-components";

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 2rem;
  gap: 2rem;

  &:has(li:hover) li:not(:hover) {
    opacity: 0.6;
    scale: 0.98;
  }
`;
export const Item = styled.li`
  width: 100%;
  padding: 2rem;
  list-style: none;
  user-select: none;

  border-radius: 10px;

  background-color: ${(props) => props.theme["base-post"]};
  color: ${(props) => props.theme["white"]};

  & > p {
    text-align: justify;
  }

  :hover {
    background-color: ${(props) => props.theme["base-border"]};
  }

  cursor: pointer;
`;
export const ItemTitle = styled.div`
  display: flex;
  margin-bottom: 1.25rem;
  justify-content: space-between;
  align-items: center;

  & > h3 {
    width: 80%;
    padding-right: 1rem;
  }
  & > span {
    width: 20%;
    color: ${(props) => props.theme["base-span"]};
    font-size: 0.875rem;
  }
`;
