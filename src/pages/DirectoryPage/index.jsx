import styled from "styled-components";
import Header from "../../components/Header";
import axios from "axios";
import CreateDirectoryForm from "../../components/CreateDirectoryForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL, useGetDirectories, useVerifyAccessToken } from "../../services/api";
import { DirectoryInput } from "../../components/CreateDirectoryForm/style";
import DirectoryItem from "../../components/DirectoryItem";
import useForm from "../../hooks/useForm";
import { Content, CurrentDirectory, DirectoryEditForm, EditButton, Subdirectories, SubdirectoriesContainer } from "./style";

function DirectoryPage() {
  const { id } = useParams();
  const { directories } = useGetDirectories();
  const [directory, setDirectory] = useState();
  const { form, handleForm } = useForm({ name: "", parent: "" });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      const token = useVerifyAccessToken();
      const config = { headers: { Authorization: `Bearer ${token}` } };

      axios
      .get(`${BASE_URL}/directory/${id}`, config)
      .then((res) => setDirectory(res.data[0]))
      .catch((err) => alert("Diretório não encontrado."));
    }
  }, [id]);

  const findSubdirectories = () => {
    return directories?.filter((d) => d.parent === parseInt(id));
  };
  const subdirectories = findSubdirectories();

  const handleEditDirectory = (e) => {
    e.preventDefault()
  };

  return (
    <>
      <Header />
      <CreateDirectoryForm />
      <Content>
        <CurrentDirectory>
          <p>Diretório atual</p>
          <DirectoryItem directory={directory} />
          <DirectoryEditForm onSubmit={handleEditDirectory}>
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
            <EditButton type="submit" disabled={isLoading}>
              Editar
            </EditButton>
          </DirectoryEditForm>
        </CurrentDirectory>
        <SubdirectoriesContainer>
          <p>Subdiretórios</p>
          {subdirectories?.length > 0 ? (
            <Subdirectories>
              {subdirectories.map((s) => (
                <DirectoryItem key={s.id} directory={s} />
              ))}
            </Subdirectories>
          ) : (
            <p>Nenhuma subpasta encontrada.</p>
          )
          }
        </SubdirectoriesContainer>
      </Content>
    </>
  );
}

export default DirectoryPage;
