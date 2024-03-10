import axios from "axios";
import { useEffect, useState } from "react";
import { useRefreshToken, useVerifyToken } from "./auth";

const BASE_URL = import.meta.env.VITE_BASE_URL;
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

const useVerifyAccessToken = () => {
  const verifyToken = useVerifyToken();
  const refresh = useRefreshToken();
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (!verifyToken(accessToken)) refresh(refreshToken);
  const token = localStorage.getItem("accessToken");
  return token;
};
