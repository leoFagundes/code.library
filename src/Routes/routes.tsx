import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "src/Pages/Home";
import NavBar from "src/Components/Nav";
import Library from "src/Pages/Library";
import GlobalAudioPlayer from "src/Components/GlobalAudioPlayer";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <main>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </main>
      {location.pathname !== "/" && <GlobalAudioPlayer />}
    </>
  );
};

const RoutesApp = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default RoutesApp;
