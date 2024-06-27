import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import NavBar from "../Components/Nav";

const Layout = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </>
);

const RoutesApp = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default RoutesApp;
