import React from 'react'
import { createRoot } from 'react-dom/client';
import ProfilePage from './pages/ProfilePage';
import NewsPage from './pages/NewsPage';
import './styles/style.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import NewsDetailPage from './pages/NewsDetailPage';

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
]);

const root = createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
