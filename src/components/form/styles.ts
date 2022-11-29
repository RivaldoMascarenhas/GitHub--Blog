import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 4.5rem;

  & > input {
    background-color: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["white"]};

    padding: 0.75rem;

    border: none;
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }
    :focus {
      outline: 2px solid ${(props) => props.theme.blue};
    }
  }
`;
export const TitlePublic = styled.div`
  & > p {
    display: flex;
    justify-content: space-between;
    user-select: none;
  }
  & > p > span {
    font-size: 0.875rem;
    user-select: none;
  }
`;
