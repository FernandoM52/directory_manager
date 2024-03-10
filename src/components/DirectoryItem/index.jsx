import styled from "styled-components";

function DirectoryItem({ directory }) {
  console.log(directory)

  return (
    <Directory>
      <div>
        <h2>Nome: <span>{directory.name}</span></h2>
        <h3>Id: <span>{directory.id}</span></h3>
      </div>
      {directory.parent === null ? 
        <h3>Id da pasta pai: nenhuma</h3> :
        <h3>Id da pasta pai: <span>{directory.parent}</span></h3>
      }
    </Directory>
  );
}

export default DirectoryItem;

const Directory = styled.li`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 220px;
  height: 150px;
  border-radius: 7px;
  padding: 0.5rem;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 20px;
  text-overflow: ellipsis;
  cursor: pointer;
  &:hover {
    background-color: #dfe3e7;
  }

  span {
    color: #303134;
    font-weight: 400;
  }
  
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }

  h2, h3 {
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 600;
    }
`;
