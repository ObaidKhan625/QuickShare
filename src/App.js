import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/upload" element={<UploadPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
