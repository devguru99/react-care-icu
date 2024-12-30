import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import AppTheme from '@/theme/AppTheme';
import AppAppBar from '@/components/AppAppBar';
import Footer from '@/components/Footer';
import Pages from '@/routes/Pages';
import ScrollFab from './components/ScrollFav';

export default function App() {
  return (
    <React.StrictMode>
      <StyledEngineProvider injectFirst>
          <AppTheme >
            <CssBaseline enableColorScheme/>
            <BrowserRouter>
              <AppAppBar />
              <Pages />
              <Footer/>
              {/* scroll to top section */}
              <ScrollFab />
            </BrowserRouter>
          </AppTheme>
      </StyledEngineProvider>
    </React.StrictMode>
  );
}
