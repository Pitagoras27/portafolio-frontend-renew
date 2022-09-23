import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const themePurple = createTheme({
  palette: {
    primary: {
      main: "#1c3643",
      // main: "#f1f6f9",
      // main: "#424344",
    },
    secondary: {
      main: "#0375b8",
    },
    error: {
      main: red.A400,
    },
  },
});
