import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Main from "./containers/Main";
import Impressum from "./containers/impressum/Impressum";
import { StyleProvider } from "./contexts/StyleContext";

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  return (
    <StyleProvider value={{ isDark, setIsDark }}>
      <div className={isDark ? "dark-mode" : ""}>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/impressum" element={<Impressum />} />
          </Routes>
        </Router>
      </div>
    </StyleProvider>
  );
}

export default App;
