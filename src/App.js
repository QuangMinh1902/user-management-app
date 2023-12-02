import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./crud app/Home";
import Create from "./crud app/Create";
import Update from "./crud app/Update";
import Read from "./crud app/Read";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
      </Routes>
  );
}

export default App;
