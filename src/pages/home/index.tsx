import { Form } from "../../components/form";
import { ListIssues } from "../../components/ListIssues";
import { Profile } from "../../components/profile";

export function Home() {
  return (
    <div>
      <Profile />
      <Form />
      <ListIssues />
    </div>
  );
}
