import { Routes, Route} from "react-router-dom";

import NavbarComponents from "./components/NavbarComponents";
// import FooterComponents from "./components/FooterComponents";


import HomePage from "./pages/HomePage";
import ProfilPage from "./pages/ProfilPage";
import InformasiPage from "./pages/InformasiPage";
import BeritaPage from "./pages/BeritaPage";
import PpdbPage from "./pages/PpdbPage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";

 

function App() { // Route path adalah konfigurasi untuk ke masing2 halaman
  return (<div>
    <NavbarComponents />
    <Routes> 
      <Route path="/" Component={HomePage} />
      <Route path="/profil" Component={ProfilPage} />
      <Route path="/informasi" Component={InformasiPage} />
      <Route path="/berita" Component={BeritaPage} />
      <Route path="/ppdb" Component={PpdbPage} />
      <Route path="/faq" Component={FaqPage} />
      <Route path="/contact" Component={ContactPage} />
    </Routes>
    {/* <FooterComponents /> */}
  </div>
  );
}

export default App;
