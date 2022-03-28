import { Repositories } from "./pages/Repositories";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Commits } from "./pages/Commits";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Repositories />} />
        <Route path="/commits/:repo" element={<Commits />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
