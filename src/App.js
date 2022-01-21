import React from "react";
import { Routes, Route } from "react-router-dom";
import GraphQLApolloPage from "./pages/GraphQLApolloPage";
import ReactQueryPage from "./pages/ReactQueryPage";
import GraphQLPage from "./pages/GraphQLPage";
import RTKPage from "./pages/RTKPage";
import ReduxThunkPage from "./pages/ReduxThunkPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/graphql-apollo" element={<GraphQLApolloPage />} />
        <Route path="/react-query" element={<ReactQueryPage />} />
        <Route path="/graphgl" element={<GraphQLPage />} />
        <Route path="/redux" element={<ReduxThunkPage />} />
        <Route path="/rtk" element={<RTKPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
