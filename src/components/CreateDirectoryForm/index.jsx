import { useState } from "react";
import styled from "styled-components";
import useForm from "../../hooks/useForm";
import { useCreateDirectory } from "../../services/api";

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
            <path
              d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z">
            </path>
          </svg>
          <span>Novo</span>
        </StyledButton>
      </Form>
    </FormDiv>
  );
}

export default CreateDirectoryForm;

const FormDiv = styled.div`
  background-color: #202020;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12%;
  position: fixed;
  top: 12%;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 50%;
  height: 2.5rem;
`;

const DirectoryInput = styled.input`
  padding: 10px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-size: 20px;
  line-height: 25px;
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#ffffff")};
  color: ${(props) => (props.disabled ? "#afafaf" : "#666666")};
  &::placeholder {
    color: #dbdbdb;
  }
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #202020;
  gap: 0.75rem;
  border-radius: 6.25rem;
  border-width: 0;
  padding: 1.125rem 1.25rem 1.125rem 1rem;
  pointer-events: ${(props) => (props.disabled ? "none" : "all")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  cursor: pointer;
  &:hover {
    background-color: #e0e4ed;
  }
`;
