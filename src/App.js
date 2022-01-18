import React from "react";
import { Routes, Route } from "react-router-dom";
import GraphQLApolloPage from "./pages/GraphQLApolloPage.js";
import ReactQueryPage from "./pages/ReactQueryPage.js";
import GraphQLPage from "./pages/GraphQLPage.js";
import RTKPage from "./pages/RTKPage.js";
import ReduxThunkPage from "./pages/ReduxThunkPage.js";
import Buttons from "./components/Buttons.js";

function App() {
  return (
    <>
      <Buttons />

      <Routes>
        <Route path="/graphql-apollo" element={<GraphQLApolloPage />} />
        <Route path="/react-query" element={<ReactQueryPage />} />
        <Route path="/graphgl" element={<GraphQLPage />} />
        <Route path="/thunk" element={<ReduxThunkPage />} />
        <Route path="/rtk" element={<RTKPage />} />
      </Routes>
    </>
  );
}

export default App;
