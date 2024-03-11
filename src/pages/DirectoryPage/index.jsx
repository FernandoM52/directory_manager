import Header from "../../components/Header";
import CreateDirectoryForm from "../../components/CreateDirectoryForm";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useEditDirectory,
  useGetDirectories,
  useGetDirectory,
} from "../../services/api";
import { DirectoryInput } from "../../components/CreateDirectoryForm/style";
import DirectoryItem from "../../components/DirectoryItem";
import useForm from "../../hooks/useForm";
import {
  Content,
  CurrentDirectory,
  DirectoryEditForm,
  EditButton,
  Subdirectories,
  SubdirectoriesContainer,
} from "./style";

function DirectoryPage() {
  const { id } = useParams();
  const { directories } = useGetDirectories();
  const { directory, getDirectory } = useGetDirectory();
  const { form, handleForm } = useForm({ name: "", parent: "" });
  const [isLoading, setIsLoading] = useState(false);
  const editDirectory = useEditDirectory();

  useEffect(() => {
    if (id) {
      getDirectory(id);
    }
  }, [id]);

  // Funcao que filtra os diretorios que possuem o campo parent igual ao id
  // do diretorio acessado na pagina
  const findSubdirectories = () => {
    return directories?.filter((d) => d.parent === parseInt(id));
  };
  const subdirectories = findSubdirectories();

  const handleEditDirectory = (e) => {
    e.preventDefault();
    setIsLoading(true);
    editDirectory(id, form);
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
          )}
        </SubdirectoriesContainer>
      </Content>
    </>
  );
}

export default DirectoryPage;
