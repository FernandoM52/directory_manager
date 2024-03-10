import { useNavigate } from "react-router-dom";
import { Directory } from "./styled";

function DirectoryItem({ directory }) {
  const navigate = useNavigate();
  //console.log(directory)
  return (
    <Directory onClick={() => navigate(`/directory/${directory?.id}`)}>
      <div>
        <h2>Nome: <span>{directory?.name}</span></h2>
        <p>Id: <span>{directory?.id}</span></p>
      </div>
      {directory?.parent === null ? 
        <p>Id da pasta pai: <span>nenhuma</span></p> :
        <p>Id da pasta pai: <span>{directory?.parent}</span></p>
      }
    </Directory>
  );
}

export default DirectoryItem;
