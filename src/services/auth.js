import axios from "axios";
import { useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;
export function useSignIn() {
  const navigate = useNavigate()

  return (body) => {
    axios.post(`${BASE_URL}/token`, body)
      .then(res => {
        console.log(res.data); //LEMBRETE: apagar console

        localStorage.setItem("accessToken", res.data.access);
        localStorage.setItem("refreshToken", res.data.refresh);
        navigate("/home");
      })
      .catch((err) => alert(err.response.data));
  }
}