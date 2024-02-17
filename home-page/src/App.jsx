import { Routes, Route} from "react-router-dom";

import HeaderComponents from "./components/HeaderComponents";
import NavbarComponents from "./components/NavbarComponents";
import FooterComponents from "./components/FooterComponents";
 

import HomePage from "./pages/HomePage";
import ProfilPage from "./pages/ProfilPage";
import InformasiPage from "./pages/InformasiPage";
import InformasiKaldikPage from "./pages/InformasiKaldikPage";
import BeritaPage from "./pages/BeritaPage";
import NewsDetailPage from './pages/NewsDetailPage';
import PpdbPage from "./pages/PpdbPage";
import PpdbPendaftaran from './pages/PpdbPendaftaran';
import StatusPendaftaranPage from "./pages/StatusPendaftaranPage";
import PengumumanPendaftaranPage from "./pages/PengumumanPendaftaranPage";
import ContactPage from "./pages/ContactPage";
import PengumumanPage from "./pages/PengumumanPage";

function App() { // Route path adalah konfigurasi untuk ke masing2 halaman
  return (<div>
    <HeaderComponents />
    <NavbarComponents /> 
    <Routes> 
      <Route path="/" Component={HomePage} />
      <Route path="/profil" Component={ProfilPage} />
      <Route path="/informasi-sekolah" Component={InformasiPage} />
      <Route path="/informasi-kalender" Component={InformasiKaldikPage} />
      <Route path="/berita" Component={BeritaPage} />
      <Route path="/berita/detail-berita/:id" Component={NewsDetailPage} />
      <Route path="/ppdb" Component={PpdbPage} />
      <Route path="/ppdb/pendaftaran" Component={PpdbPendaftaran} />
      <Route path="/ppdb/status-pendaftaran" Component={StatusPendaftaranPage} />
      <Route path="/ppdb/pengumuman" Component={PengumumanPendaftaranPage} />
      <Route path="/pengumuman" Component={PengumumanPage} />
      <Route path="/contact" Component={ContactPage} />
    </Routes>
    <FooterComponents />
  </div>
  );
}

export default App;
