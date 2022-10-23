import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu, Killers, Survivors } from "./components";
import { Footer } from "./components";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/killers" element={<Killers />} />
          <Route path="/survivors" element={<Survivors />} />
          {/*<Route path="*" element={<NoPage />} />}*/}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
