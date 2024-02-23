import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Theme from './theme/ExtendTheme.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter basename="/Education-Platform/">
    <ChakraProvider theme={Theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
