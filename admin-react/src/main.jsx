import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { zhCN } from "@mui/x-data-grid";
import { zhCN as pickerszhCN } from "@mui/x-date-pickers";
import { zhCN as corezhCN } from "@mui/material/locale";
import initailRouter from "./routes/Router";
import store from "./store/reduxStore";
const queryClient = new QueryClient();
const theme = createTheme({
  palette: {},
  zhCN,
  pickerszhCN,
  corezhCN,
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <RouterProvider router={initailRouter} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
