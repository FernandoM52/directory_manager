import { useState } from "react";
import useForm from "../../hooks/useForm";
import { useCreateDirectory } from "../../services/api";
import { DirectoryInput, Form, FormDiv, StyledButton } from "./style";

function CreateDirectoryForm() {
  const { form, handleForm } = useForm({ name: "", parent: "" });
  const [isLoading, setIsLoading] = useState(false);
  const createDirectory = useCreateDirectory();

  const handleCreateDirectory = (e) => {
    e.preventDefault();
    setIsLoading(true);
    createDirectory(form);
  };

  return (
    <FormDiv>
      <Form onSubmit={handleCreateDirectory}>
        <DirectoryInput
          name="name"
          type="text"
          placeholder="titulo da pasta"
          value={form.name}
          onChange={handleForm}
          disabled={isLoading}
          required
        ></DirectoryInput>
        <DirectoryInput
          name="parent"
          type="number"
          placeholder="id da pasta pai"
          value={form.parent}
          onChange={handleForm}
          disabled={isLoading}
        ></DirectoryInput>
        <StyledButton type="submit" disabled={isLoading}>
          <svg
            className="Q6yead QJZfhe"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            focusable="false"
          >
            <path d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"></path>
          </svg>
          <span>Novo</span>
        </StyledButton>
      </Form>
    </FormDiv>
  );
}

export default CreateDirectoryForm;
