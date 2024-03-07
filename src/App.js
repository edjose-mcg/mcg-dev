import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
// Material-UI imports
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// MSAL imports
import { MsalProvider } from "@azure/msal-react";
import { CustomNavigationClient } from "./utils/NavigationClient";

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

// ==============================|| APP ||============================== //

const App = ({ pca }) => {
  const customization = useSelector((state) => state.customization);

  // The next 3 lines are optional. This is how you configure MSAL to take advantage of the router's navigate functions when MSAL redirects between pages in your app
  const navigate = useNavigate();
  const navigationClient = new CustomNavigationClient(navigate);
  pca.setNavigationClient(navigationClient);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <MsalProvider instance={pca}>
          <NavigationScroll>
            <Routes />
          </NavigationScroll>
        </MsalProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
