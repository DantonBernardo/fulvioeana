import { Routes, Route } from "react-router-dom";

import Ana from "../pages/Ana";
import Fulvio from "../pages/Fulvio";
import Home from "../pages/Home";

export default function RoutesApp(){
  return(
    <Routes>
      <Route
        path="/"
        element={ <Home /> }
      />

      <Route
        path="/fulvio"
        element={ <Fulvio /> }
      />

      <Route
        path="/ana"
        element={ <Ana /> }
      />
    </Routes>
  )
}