import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import { MantineProvider } from '@mantine/core';

render(
  <React.StrictMode>
    <MantineProvider withNormalizeCSS>
      <App />
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);
