import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import FilesPage from "./pages/FilesPage/FilesPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/upload" element={<UploadPage />} />
          <Route exact path="/show-files" element={<FilesPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;