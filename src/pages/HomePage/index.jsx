import styled from "styled-components";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import useQuickOut from "../../hooks/useQuickOut";
import { useGetDirectories } from "../../services/api";
import CreateDirectoryForm from "../../components/CreateDirectoryForm";
import DirectoryItem from "../../components/DirectoryItem";

function HomePage() {
  const navigate = useNavigate();
  const { directories, getDirectories } = useGetDirectories();
  useQuickOut();

  return (
    <>
      <Header />
      <CreateDirectoryForm />
      <Content>
        {!directories && <span>Carregando...</span>}
        {directories && directories.length === 0 && (
          <span>Está um pouco vazio por aqui...</span>
        )}
        {directories && directories.length > 0 && (
          <Directories>
            {directories.map((d) => <DirectoryItem key={d.id} directory={d} />)}
          </Directories>
        )}
      </Content>
    </>
  );
}

export default HomePage;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #202020;

  height: 100vh;
  span {
    color: #fff;
  }
`;

const Directories = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding: 5%;
`;
