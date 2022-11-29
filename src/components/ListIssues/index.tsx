import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReposContext } from "../../context/ReposContext";
import { formatDate } from "../../utils/utils";
import { Item, ItemTitle, ListContainer } from "./styles";

export function ListIssues() {
  const { issues, setIssue } = useContext(ReposContext);
  const navigate = useNavigate();

  return (
    <ListContainer>
      {issues.map((item) => {
        return (
          <Item
            key={item.id}
            onClick={() => {
              navigate("/post");
              setIssue(item);
            }}
          >
            <ItemTitle>
              <h3>{item.title}</h3>
              <span>{formatDate(item.created_at)}</span>
            </ItemTitle>
            <p>{item.body.substring(0, 226) + "..."}</p>
          </Item>
        );
      })}
    </ListContainer>
  );
}
