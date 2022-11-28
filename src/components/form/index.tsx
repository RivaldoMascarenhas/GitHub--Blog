import { FormContainer } from "./styles";

export function Form() {
  return (
    <FormContainer>
      <div>
        <p>
          Publicações <span>0 publicações</span>
        </p>
      </div>
      <input type="text" name="search" placeholder="Buscar conteúdo" />
    </FormContainer>
  );
}
