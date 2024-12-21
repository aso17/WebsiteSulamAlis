import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  AboutMe,
  ServiceSulamAlis,
  ServiceSulamBibir,
  ServiceSulamEyeliner,
  ServiceLaserRemoval,
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
      </Routes>
    </Router>
  );
};

export default Routers;
