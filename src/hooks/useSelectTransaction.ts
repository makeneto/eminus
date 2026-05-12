import { useState } from "react"

export function useSelectTransaction() {
  const [selected, setSelected] = useState<string | null>(null)

  const handleRowClick = (id: string) => {
    setSelected((prev) => (prev === id ? null : id))
  }

  const handleDeselectAll = () => {
    setSelected(null)
  }

  return { selected, handleRowClick, handleDeselectAll }
}
