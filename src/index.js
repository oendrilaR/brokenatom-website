import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter} from 'react-router-dom'

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);