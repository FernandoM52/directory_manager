import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Custom hook responsavel pelo logout do sistema
function useQuickOut() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) navigate("/");
  }, []);
}

export default useQuickOut;
