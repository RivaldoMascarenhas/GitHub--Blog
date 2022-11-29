import { useContext } from "react";
import { useForm } from "react-hook-form";
import { ReposContext } from "../../context/ReposContext";
import { FormContainer, TitlePublic } from "./styles";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInput = z.infer<typeof searchFormSchema>;

export function Form() {
  const { issues, listRepos } = useContext(ReposContext);

  const { register, handleSubmit, reset } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSearch(data: SearchFormInput) {
    listRepos(data.query);
    reset();
  }
  return (
    <FormContainer onSubmit={handleSubmit(handleSearch)}>
      <TitlePublic>
        <p>
          Publicações <span>{issues.length} publicações</span>
        </p>
      </TitlePublic>
      <input type="text" placeholder="Buscar conteúdo" {...register("query")} />
    </FormContainer>
  );
}
