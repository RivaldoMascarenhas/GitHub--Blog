import styled from "styled-components";

export const ContainerProfile = styled.div`
  display: flex;
  padding: 2rem;
  gap: 3rem;
  margin-top: -5rem;
  justify-content: center;

  box-shadow: 2px 5px 2px 3px rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  line-height: 160%;

  background-color: ${(props) => props.theme["base-profile"]};

  & > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 10px;
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  line-height: 0;

  svg {
    width: 1.125rem;
    & > path {
      fill: ${(props) => props.theme["base-label"]};
    }
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Github = styled.a`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.75rem;
  text-decoration: none;
  color: ${(props) => props.theme.blue};
  cursor: pointer;
  user-select: none;
`;
