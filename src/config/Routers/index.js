import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  AboutMe,
  ServiceSulamAlis,
  ServiceSulamBibir,
  ServiceSulamEyeliner,
  ServiceLaserRemoval,
  Galery,
} from "../../pages";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/aboutme" exact element={<AboutMe />} />
        <Route path="/sulam-alis" exact element={<ServiceSulamAlis />} />
        <Route path="/sulam-bibir" exact element={<ServiceSulamBibir />} />
        <Route
          path="/sulam-eyeliner"
          exact
          element={<ServiceSulamEyeliner />}
        />
        <Route path="/laser-removal" exact element={<ServiceLaserRemoval />} />
        <Route path="/galery" exact element={<Galery />} />
      </Routes>
    </Router>
  );
};

export default Routers;
