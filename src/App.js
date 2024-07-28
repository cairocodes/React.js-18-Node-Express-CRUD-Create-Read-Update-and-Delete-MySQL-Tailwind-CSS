import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //npm i react-router-dom https://www.npmjs.com/package/react-router-dom
import Home from "./elements/Home";
import Create from "./elements/Create";
import Read from "./elements/Read";
import Edit from "./elements/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/create" element={<Create />} />
         <Route path="/read/:id" element={<Read />} />
         <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;