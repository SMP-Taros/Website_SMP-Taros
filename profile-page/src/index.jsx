import React from 'react'
import { createRoot } from 'react-dom/client';
import FullWeb from './components/FullWeb';
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<FullWeb />);
