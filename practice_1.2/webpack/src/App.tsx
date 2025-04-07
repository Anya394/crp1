import { Button, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <h1>Webpack + React + MUI</h1>
        <Button variant="contained">Test</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;