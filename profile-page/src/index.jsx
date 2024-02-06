import React from 'react'
import { createRoot } from 'react-dom/client';

import ProfilePage from './pages/ProfilePage';
import PPDBPage from './pages/PPDBPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import StatusPendaftaranPage from './pages/StatusPendaftaranPage';
import PengumumanPage from './pages/PengumumanPage';

import './styles/style.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <ProfilePage />,
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
        element: <PPDBPage />,
    },
    {
        path: "/ppdb/status-pendaftaran",
        element: <StatusPendaftaranPage />,
    },
    {
        path: "/ppdb/pengumuman",
        element: <PengumumanPage />,
    },
]);

const root = createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
