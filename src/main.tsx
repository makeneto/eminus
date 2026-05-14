import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import "./css/styles.css"
import "./css/index.css"
import App from "./App.tsx"
import SideNavBar from "./components/layouts/SideNavBar.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <main className="layout">
        <SideNavBar />
        <main className="pages">
          <App />
        </main>
      </main>
    </BrowserRouter>
  </StrictMode>,
)
