import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "src/pages/Home";
import NavBar from "src/components/Nav";
import Library from "src/pages/Library";
import GlobalAudioPlayer from "src/components/GlobalAudioPlayer";

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
