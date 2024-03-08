import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function useQuickIn() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("accessToken")) navigate("/home");
  }, []);
}

export default useQuickIn;
