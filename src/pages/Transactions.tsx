import TransactionsLayout from "@/components/layouts/TransactionsLayout"
import Header from "../components/layouts/Header"
import React from "react"

export default function Transactions() {
  return (
    <React.Fragment>
      <Header title="Transactions" />
      <TransactionsLayout />
    </React.Fragment>
  )
}
