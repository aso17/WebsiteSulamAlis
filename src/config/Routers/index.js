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
        <Route path="/aboutme" exact element={<AboutMe />} />
        <Route path="/sulam-alis" exact element={<ServiceSulamAlis />} />
        <Route
          path="/remove-sulamalis"
          exact
          element={<ServiceRemoveSulamAlis />}
        />
        <Route path="/sulam-bibir" exact element={<ServiceSulamBibir />} />
        <Route
          path="/sulam-eyeliner"
          exact
          element={<ServiceSulamEyeliner />}
        />
        <Route path="/laser-removal" exact element={<ServiceLaserRemoval />} />
        <Route path="/academy" exact element={<Academy />} />
        <Route path="/galery" exact element={<Galery />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Routers;
