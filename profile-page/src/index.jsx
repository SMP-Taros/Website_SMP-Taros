import React from 'react'
import { createRoot } from 'react-dom/client';
import ProfilePage from './pages/ProfilePage';
import NewsPage from './pages/NewsPage';
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
]);

const root = createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);
