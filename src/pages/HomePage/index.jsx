import styled from "styled-components";
import Header from "../../components/Header";

function HomePage() {
  //TODO: Fazer hook de login automatico se tiver token no local storage
  return (
    <>
      <Header />
      <Content>
        {/*Aqui eh onde os diretorios serao renderizados para o usuario*/}
      </Content>
    </>
  );
}

export default HomePage;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #202020;
  min-width: 100vw;
  min-height: 100vh;
`;
