import React from "react";
import { Routes, Route } from "react-router-dom";
import GraphQLApolloPage from "./pages/GraphQLApolloPage.js";
import ReactQueryPage from "./pages/ReactQueryPage.js";
import GraphQLPage from "./pages/GraphQLPage.js";
import RTKPage from "./pages/RTKPage.js";

function App() {
  return (
    <Routes>
      <Route path="/graphql-apollo" element={<GraphQLApolloPage />} />
      <Route path="/react-query" element={<ReactQueryPage />} />
      <Route path="/graphgl" element={<GraphQLPage />} />
      <Route path="/rtk" element={<RTKPage />} />
    </Routes>
  );
}

export default App;
