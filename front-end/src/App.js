import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
