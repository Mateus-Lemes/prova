import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";
import userContext from "./Context/userContext";
import { useState } from "react";
import ConfigModulesAndClasses from "./Pages/Config";
import AddModule from "./Pages/AddModule";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const headers = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  }

  return (
    <userContext.Provider value={{token, setToken, headers}}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/Admin/login" element={<LoginPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/config" element={<ConfigModulesAndClasses />} />
          <Route path="/add-module" element={<AddModule />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
