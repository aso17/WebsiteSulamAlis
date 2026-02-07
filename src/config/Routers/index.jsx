import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  AboutMe,
  ServiceSulamAlis,
  ServiceRemoveSulamAlis,
  ServiceSulamBibir,
  ServiceSulamEyeliner,
  ServiceLaserRemoval,
  Academy,
  Galery,
  Contact,
} from "../../Pages";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/rosidisulamalis-aboutme" exact element={<AboutMe />} />
        <Route path="/layanan-sulam-alis" exact element={<ServiceSulamAlis />} />
        <Route
          path="/layanan-remove-sulamalis"
          exact
          element={<ServiceRemoveSulamAlis />}
        />
        <Route path="/layanan-sulam-bibir" exact element={<ServiceSulamBibir />} />
        <Route
          path="/layanan-sulam-eyeliner"
          exact
          element={<ServiceSulamEyeliner />}
        />
        <Route path="/layanan-laser-removal" exact element={<ServiceLaserRemoval />} />
        <Route path="/rosidisulamalis-academy" exact element={<Academy />} />
        <Route path="/rosidisulamalis-galery" exact element={<Galery />} />
        <Route path="/rosidisulamalis-contact" exact element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Routers;
