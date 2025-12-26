import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { OfflinePage } from "./pages/index.js";
import { Offline, Online } from "react-detect-offline";
import ProductContextProvider from "./contexts/ProductContext.jsx";
import "./index.css";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductContextProvider>
        <Online>
          <App />
        </Online>

        <Offline>
          <OfflinePage />
        </Offline>
      </ProductContextProvider>
    </BrowserRouter>
  </StrictMode>
);
