import React from 'react';
import axios from 'axios';
import { createRoot } from 'react-dom/client';
import App from './App';

var container = document.getElementById("root")
var root = createRoot(container)
root.render(<App/>);
