import React from "react";
import { Routes, Route } from "react-router-dom";
import ReactQueryPage from "./pages/ReactQueryPage.js";
import RTKPage from "./pages/RTKPage.js";
import GraphGL from "./pages/GrapgQL.js";

function App() {
  return (
    <Routes>
      <Route path="/react-query" element={<ReactQueryPage />} />
      <Route path="/rtk" element={<RTKPage />} />
      <Route path="/graphgl" element={<GraphGL />} />
    </Routes>
  );
}

export default App;
