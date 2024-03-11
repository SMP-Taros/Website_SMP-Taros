import React from 'react'
import { createRoot } from 'react-dom/client';
 

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import InfoPendaftaranPage from './pages/InfoPendaftaranPage';
import NewsPage from './pages/NewsPage'; 
import NewsDetailPage from './pages/NewsDetailPage';
import StatusPendaftaranPage from './pages/StatusPendaftaranPage';
import PengumumanPage from './pages/PengumumanPage';
import Pengumuman from './pages/Pengumuman';
import ContactPage from './pages/ContactPage';
import PpdbPage from './pages/PPDBPage';
import InformasiSekolahPage from './pages/InformasiSekolahPage';
import InformasiKaldikPage from './pages/InformasiKaldikPage';

// import './styles/style.css';
import './styles/second-style.css'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/profil",
        element: <ProfilePage />,
    },
    {
        path: "/informasi-sekolah",
        element: <InformasiSekolahPage />,
    },
    {
        path: "/informasi-kalender",
        element: <InformasiKaldikPage />,
    },
    {
        path: "/pengumuman",
        element: <Pengumuman />,
    },
    { 
        path: "/berita",
        element: <NewsPage />,
    },
    {
        path: "/berita/detail-berita/:id",
        element: <NewsDetailPage />,
    },
    {
        path: "/ppdb",
        element: <PpdbPage />,
    },
    {
        path: "/ppdb/informasi-pendaftaran",
        element: <InfoPendaftaranPage />,
    },
    {
        path: "/ppdb/status-pendaftaran",
        element: <StatusPendaftaranPage />,
    },
    {
        path: "/ppdb/pengumuman",
        element: <PengumumanPage />,
    },
    {
        path: "/contact",
        element: <ContactPage />,
    },
]);

const root = createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
