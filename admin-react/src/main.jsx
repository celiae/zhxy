import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import initailRouter from "./routes/Router";
import store from "./store/reduxStore";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={initailRouter} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
