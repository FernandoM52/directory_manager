import { useState } from "react";

// Custom hook responsavel por alterar o valor do input
// podendo ser reaproveitado em varios lugares do codigo
function useForm(initialForm) {
  const [form, setForm] = useState(initialForm);

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  return { form, handleForm };
}

export default useForm;
