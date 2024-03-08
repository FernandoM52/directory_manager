import styled from "styled-components";
import useForm from "../../hooks/useForm";
import { useState } from "react";
import { useSignIn } from "../../services/auth";
import { Button, Container, Form, Input } from "./style";

function SignInPage() {
  const { form, handleForm } = useForm({ username: "", password: "" })
  const [isLoading, setIsLoading] = useState(false);
  const signin = useSignIn();

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    signin(form);
  }

  return (
    <Container>
      <h1>Directory Manager</h1>
      <Form onSubmit={handleSignIn}>
        <Input
          name="username"
          type="text"
          placeholder="nome de usuário"
          value={form.username}
          onChange={handleForm}
          disabled={isLoading}
          required
        >
        </Input>
        <Input
          name="password"
          type="password"
          placeholder="senha"
          value={form.password}
          onChange={handleForm}
          disabled={isLoading}
          required
        >
        </Input>
        <Button type="submit" disabled={isLoading}>
          {
            isLoading
            ? "Carregando..."
              : "Entrar"
          }
        </Button>
      </Form>
    </Container>
  );
}

export default SignInPage;
