import styled from "styled-components";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import useQuickOut from "../../hooks/useQuickOut";
import { useGetDirectories } from "../../services/api";
import CreateDirectoryForm from "../../components/CreateDirectoryForm";

function HomePage() {
  const navigate = useNavigate();
  const {directories, getDirectories } = useGetDirectories();
  useQuickOut();

  console.log(directories)
  return (
    <>
      <Header />
      <CreateDirectoryForm />
      <Content>
        {!directories && <span>Carregando...</span>}
        {directories && directories.length === 0 && <span>Está um pouco vazio por aqui...</span>}
        {directories && directories.length > 0 && (
          <Directories>
            {/*directories.map()*/}
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

  span {
    color: #fff;
  }
`;

const Directories = styled.ul`
background-color: blue;
  display: flex;
  height: 500px;
  width: 100%;
`;