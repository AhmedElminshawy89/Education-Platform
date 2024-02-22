import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/Education-Platform/">
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
