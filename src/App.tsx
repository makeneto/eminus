import { Route, Routes } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import Transactions from "./pages/Transactions"
import Investments from "./pages/Investments"
import Plans from "./pages/Plans"
import Payments from "./pages/Payments"

export default function App() {
  return (
    <div className="flex flex-col">
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/investments" element={<Investments />} />
      </Routes>
    </div>
  )
}
