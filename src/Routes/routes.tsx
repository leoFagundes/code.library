import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";

const RoutesApp = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default RoutesApp;