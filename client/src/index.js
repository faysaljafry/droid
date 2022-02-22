import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"
import {theme} from "./components/Theme"
import { ContextProvider } from './Context'

ReactDOM.render(
  <ContextProvider>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  </ContextProvider>,
  document.getElementById('root')
);
