import axios from "axios";
import { useEffect, useState } from "react";
import { useRefreshToken, useVerifyToken } from "./auth";
import { useNavigate } from "react-router-dom";

export const BASE_URL = import.meta.env.VITE_BASE_URL;

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

export const useVerifyAccessToken = () => {
  const verifyToken = useVerifyToken();
  const refresh = useRefreshToken();
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!verifyToken(accessToken)) refresh(refreshToken);
  const token = localStorage.getItem("accessToken");
  return token;
};

export function useGetDirectories() {
  const [directories, setDirectories] = useState(undefined);
  const token = useVerifyAccessToken();
  const config = createConfig(token);
  const getDirectories = () => {
    axios
      .get(`${BASE_URL}/directories`, config)
      .then((res) => setDirectories(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getDirectories();
  }, []);

  return { directories, getDirectories };
}

export function useCreateDirectory() {
  const token = useVerifyAccessToken();
  const config = createConfig(token);
  return (body) => {
    body = { ...body, parent: parseInt(body.parent) };
    axios
      .post(`${BASE_URL}/directories`, body, config)
      .then((res) => location.reload())
      .catch((err) => {
        alert(
          "Erro ao criar diretório, confira os campos preenchidos. Nome da diretório é obrigatório e o id da diretório pai deve ser de uma criada por você.",
        );
        location.reload();
      });
  };
}

export function useGetDirectory() {
  const [directory, setDirectory] = useState();
  const token = useVerifyAccessToken();
  const config = createConfig(token);
  const navigate = useNavigate();

  const getDirectory = (id) => {
    axios
      .get(`${BASE_URL}/directory/${id}`, config)
      .then((res) => setDirectory(res.data[0]))
      .catch((err) => {
        alert("Diretório não encontrado.");
        navigate("/home");
      });
  };

  return { directory, getDirectory };
}

export function useEditDirectory() {
  const token = useVerifyAccessToken();
  const config = createConfig(token);

  return (id, body) => {
    body = { ...body, parent: parseInt(body.parent) };

    if ((body.name.length === 0) | (body.parent.length === 0)) {
      axios
        .patch(`${BASE_URL}/directory/${id}`, body, config)
        .then((res) => location.reload())
        .catch((err) => {
          alert(
            "Erro ao editar diretório, confira os campos preenchidos. Nome da diretório é obrigatório e o id da diretório pai deve ser de uma criada por você.",
          );
          location.reload();
        });
    } else if ((body.name.length > 0) | (body.parent.length > 0)) {
      axios
        .put(`${BASE_URL}/directory/${id}`, body, config)
        .then((res) => location.reload())
        .catch((err) => {
          alert(
            "Erro ao editar diretório, confira os campos preenchidos. Nome da diretório é obrigatório e o id da diretório pai deve ser de uma criada por você.",
          );
          location.reload();
        });
    }
  };
}

export function useDeleteDirectory() {
  const token = useVerifyAccessToken();
  const config = createConfig(token);
  const navigate = useNavigate();
  return (id) => {
    axios
      .delete(`${BASE_URL}/directory/${id}`, config)
      .then((res) => {
        alert("Diretório deletado com sucesso");
        location.reload();
      })
      .catch((err) => {
        alert("Erro ao deletar diretório");
        navigate("/home");
      });
  };
}
