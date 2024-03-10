import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";
import DirectoryPage from "./pages/DirectoryPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/directory/:id" element={<DirectoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
