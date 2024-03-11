import Header from "../../components/Header";
import useQuickOut from "../../hooks/useQuickOut";
import { useGetDirectories } from "../../services/api";
import { Content, Directories } from "./style";
import CreateDirectoryForm from "../../components/CreateDirectoryForm";
import DirectoryItem from "../../components/DirectoryItem";

function HomePage() {
  const { directories } = useGetDirectories();
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
            {directories.map((d) => (
              <DirectoryItem key={d.id} directory={d} />
            ))}
          </Directories>
        )}
      </Content>
    </>
  );
}

export default HomePage;
