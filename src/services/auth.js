import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;
export function useSignIn() {
  const navigate = useNavigate();

  return (body) => {
    axios
      .post(`${BASE_URL}/token`, body)
      .then((res) => {
        localStorage.setItem("accessToken", res.data.access);
        localStorage.setItem("refreshToken", res.data.refresh);
        navigate("/home");
      })
      .catch((err) => alert(err.response.data));
  };
}

export function useVerifyToken() {
  return (body) => {
    axios
      .post(`${BASE_URL}/token/verify`, body)
      .then((res) => {})
      .catch((err) => alert(err.response.data));
  };
}

export function useRefreshToken() {
  return (body) => {
    axios
      .post(`${BASE_URL}/token/refresh`, body)
      .then((res) => localStorage.setItem("accessToken", res.data.access))
      .catch((err) => alert(err.response.data));
  };
}
