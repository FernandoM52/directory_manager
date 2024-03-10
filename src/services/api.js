import axios from "axios";
import { useEffect, useState } from "react";
import { useRefreshToken, useVerifyToken } from "./auth";

export const BASE_URL = import.meta.env.VITE_BASE_URL;
export function useGetDirectories() {
  const [directories, setDirectories] = useState(undefined);
  const token = useVerifyAccessToken();
  const config = { headers: { Authorization: `Bearer ${token}` } };
  
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
  const config = { headers: { Authorization: `Bearer ${token}` } };
  
  return (body) => {
    body = { ...body, parent: parseInt(body.parent) };
    axios
      .post(`${BASE_URL}/directories`, body, config)
      .then((res) => location.reload())
      .catch((err) => {
        alert("Erro ao criar pasta, confira os campos preenchidos. Nome da pasta é obrigatório e o id da pasta pai deve ser de uma criada por você.");
        location.reload();
      });
  };
}

export function useGetDirectory() {
  const [directory, setDirectory] = useState();
  const token = useVerifyAccessToken();
  const config = { headers: { Authorization: `Bearer ${token}` } };
  
  const getDirectory = (id) => {
    axios
      .get(`${BASE_URL}/directory/${id}`, config)
      .then((res) => setDirectory(res.data[0]))
      .catch((err) => alert("Diretório não encontrado."));
  };

  return { directory, getDirectory };
}

export function useEditDirectory() {
  const token = useVerifyAccessToken();
  const config = { headers: { Authorization: `Bearer ${token}` } };

  return (id, body) => {
    body = { ...body, parent: parseInt(body.parent) };

    if (body.name.length === 0 | body.parent.length === 0) {
      axios
        .patch(`${BASE_URL}/directory/${id}`, body, config)
        .then((res) => location.reload())
        .catch((err) => {
          alert("Erro ao editar pasta, confira os campos preenchidos. Nome da pasta é obrigatório e o id da pasta pai deve ser de uma criada por você.");
          location.reload();
        });
    } else if (body.name.length > 0 | body.parent.length > 0) {
      axios
        .put(`${BASE_URL}/directory/${id}`, body, config)
        .then((res) => location.reload())
        .catch((err) => {
          alert("Erro ao editar pasta, confira os campos preenchidos. Nome da pasta é obrigatório e o id da pasta pai deve ser de uma criada por você.");
          location.reload();
        });
    }
  };
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
