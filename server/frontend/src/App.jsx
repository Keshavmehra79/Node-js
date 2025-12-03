import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home";
import Insert from "./pages/Insert";
import Display from "./pages/Display.jsx";

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="insert" element={<Insert/>}/>
      </Route>                    
    </Routes>

  );
};

export default App;
