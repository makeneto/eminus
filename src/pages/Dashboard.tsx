import React from "react"

import DashboardLayout from "@/components/layouts/DashboardLayout"
import Header from "../components/layouts/Header"
import useGreetings from "@/hooks/useGreetings"

export default function Dashboard() {
  const greeting = useGreetings()

  return (
    <React.Fragment>
      <Header title={greeting} />
      <DashboardLayout />
    </React.Fragment>
  )
}
