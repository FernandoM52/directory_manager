import { useNavigate } from "react-router-dom";
import { Directory } from "./styled";

function DirectoryItem({ directory }) {
  const navigate = useNavigate();

  return (
    <Directory onClick={() => navigate(`/directory/${directory.id}`)}>
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
