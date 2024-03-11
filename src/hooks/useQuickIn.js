import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Custom hook responsavel pelo login automatico caso usuario
// ja possua token no local storage
function useQuickIn() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) navigate("/home");
  }, []);
}

export default useQuickIn;
