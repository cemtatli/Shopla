import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "~/pages/Home";
import ErrorPage from "~/pages/ErrorPage";
import Header from "~/components/Header/Header";
import Detail from "~/pages/Detail";
import Layout from "~/layout/Layout";
import Card from "./pages/Card";

const App = () => {
  return (
    <Router>
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/sepet" element={<Card />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
