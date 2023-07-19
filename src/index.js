import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {App} from './examples/useLayoutEffect';

document.body.innerHTML = '<div id="app"></div>';
const root = createRoot(document.getElementById('app')); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
