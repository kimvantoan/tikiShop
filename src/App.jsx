import "./App.css";
import { Header } from "./conponents/header/Header";
import { Footer } from "./conponents/footer/Footer";
import { Body } from "./conponents/body/Body";
import { Detail } from "./conponents/detail/Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [result, setResult] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <Header setResult={setResult} />
        <Routes>
          <Route path="/" element={<Body result={result} />} />
          <Route path="/product/:id" element={<Detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
