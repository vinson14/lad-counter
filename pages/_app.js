import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../styles/globals.css";
const theme = createTheme({
  typography: {
    fontFamily: "Quicksand, sans-serif",
  },
  palette: {
    primary: {
      main: "#118ab2",
    },
    secondary: {
      main: "#06d6a0",
      contrastText: "#fff",
    },
    warning: {
      main: "#ffd166",
    },
    error: {
      main: "#ef476f",
    },
  },
  shape: {
    borderRadius: 4,
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
