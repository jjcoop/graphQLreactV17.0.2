import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "../components/Layout";

import Home from "./home";
import MyNotes from "./myNotes";
import Favorites from "./favorites";

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/mynotes" element={<MyNotes />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default Pages;
