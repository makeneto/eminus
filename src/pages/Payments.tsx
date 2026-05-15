import PaymentsLayout from "@/components/layouts/PaymentsLayout"
import Header from "../components/layouts/Header"
import React from "react"

export default function Payments() {
  return (
    <React.Fragment>
      <Header title="Payments" />
      <PaymentsLayout />
    </React.Fragment>
  )
}
