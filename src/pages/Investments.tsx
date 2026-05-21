import React from "react"
import Header from "../components/layouts/Header"
import InvestmentLayout from "@/components/layouts/InvestmentLayout"

export default function Investments() {
  return (
    <React.Fragment>
      <Header title="Investments" />
      <InvestmentLayout />
    </React.Fragment>
  )
}
