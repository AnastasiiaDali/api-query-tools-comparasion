import React from "react";
import { Routes, Route } from "react-router-dom";
import GraphQLApolloPage from "./pages/GraphQLApolloPage";
import ReactQueryPage from "./pages/ReactQueryPage";
import GraphQLPage from "./pages/GraphQLPage";
import RTKPage from "./pages/RTKPage";
import ReduxPage from "./pages/ReduxPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/graphql-apollo" element={<GraphQLApolloPage />} />
        <Route path="/react-query" element={<ReactQueryPage />} />
        <Route path="/graphgl" element={<GraphQLPage />} />
        <Route path="/redux" element={<ReduxPage />} />
        <Route path="/rtk" element={<RTKPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
