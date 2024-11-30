import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Cart from "./Pages/Cart";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/Context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <CartContextProvider>

      <BrowserRouter>
        <App />
      </BrowserRouter>

    </CartContextProvider>
);
