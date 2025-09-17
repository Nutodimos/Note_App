import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import ContentPage from "./pages/ContentPage";

const App = () => {
  return (
    <div data-theme="sunset" className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<ContentPage />} />
      </Routes>
    </div>
  );
};
export default App;
