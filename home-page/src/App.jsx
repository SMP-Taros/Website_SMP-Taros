import { Routes, Route} from "react-router-dom";

import HeaderComponents from "./components/HeaderComponents";
import NavbarComponents from "./components/NavbarComponents";
// import FooterComponents from "./components/FooterComponents";
 

import HomePage from "./pages/HomePage";
import ProfilPage from "./pages/ProfilPage";
import InformasiPage from "./pages/InformasiPage";
import BeritaPage from "./pages/BeritaPage";
import PpdbPage from "./pages/PpdbPage";
import ContactPage from "./pages/ContactPage";
import PengumumanPage from "./pages/PengumumanPage";

 

function App() { // Route path adalah konfigurasi untuk ke masing2 halaman
  return (<div>
    <HeaderComponents />
    <NavbarComponents />
    <Routes> 
      <Route path="/" Component={HomePage} />
      <Route path="/profil" Component={ProfilPage} />
      <Route path="/informasi" Component={InformasiPage} />
      <Route path="/berita" Component={BeritaPage} />
      <Route path="/ppdb" Component={PpdbPage} />
      <Route path="/pengumuman" Component={PengumumanPage} />
      <Route path="/contact" Component={ContactPage} />
    </Routes>
    {/* <FooterComponents /> */}
  </div>
  );
}

export default App;
