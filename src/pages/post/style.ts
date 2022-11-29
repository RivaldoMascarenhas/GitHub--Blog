import styled from "styled-components";

export const PostContainer = styled.div`
  padding: 2rem;
  gap: 3rem;
  margin-top: -5rem;

  box-shadow: 2px 5px 2px 3px rgba(0, 0, 0, 0.2);

  border-radius: 10px;

  line-height: 160%;

  background-color: ${(props) => props.theme["base-profile"]};
`;
export const InfoContent = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
`;
export const Description = styled.div`
  padding: 2rem;
  & > p {
    line-height: 160%;
    text-align: justify;
  }
`;
