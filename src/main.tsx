import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import "./css/styles.css"
import "./css/index.css"
import App from "./App.tsx"
import SideNavBar from "./components/sideNavbar/SideNavBar.tsx"
import Footer from "./components/layouts/Footer.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <main className="layout">
        <SideNavBar />
        <main className="pages">
          <App />
          <Footer />
        </main>
      </main>
    </BrowserRouter>
  </StrictMode>,
)
