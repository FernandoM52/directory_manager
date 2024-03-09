import styled from "styled-components";

function CreateDirectoryForm() {
  return (
    <Form>
      <StyledButton type="submit">
          <svg className="Q6yead QJZfhe " width="24" height="24" viewBox="0 0 24 24" focusable="false">
              <path d="M20 13h-7v7h-2v-7H4v-2h7V4h2v7h7v2z"></path>
          </svg>
        <span>Novo</span>
      </StyledButton>
    </Form>
  );
}

export default CreateDirectoryForm;

const Form = styled.form`
  background-color: #202020;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 12%;
  position: fixed;
  top: 12%;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #202020;
  gap: 0.75rem;
  height: 3.5rem;
  width: 10%;
  border-radius: 6.25rem;
  border-width: 0;
  padding: 1.125rem 1.25rem 1.125rem 1rem;
  cursor: pointer;
  &:hover{
    background-color: #E0E4ED;
  }
`;