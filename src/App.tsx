import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Payments from "./pages/Payments"
import Transactions from "./pages/Transactions"
import Investments from "./pages/Investments"
import Plans from "./pages/Plans"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/investments" element={<Investments />} />
      </Routes>
    </BrowserRouter>
  )
}
