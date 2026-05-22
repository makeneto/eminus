import { useMemo } from "react"
import { useSearchParams } from "react-router-dom"

import { companies } from "@/constants/companies"

const ITEMS_PER_PAGE = 4

export function useCompaniesPagination() {
  const [searchParams, setSearchParams] = useSearchParams()

  const currentPage = Number(searchParams.get("page") ?? 1)
  const totalPages = Math.ceil(companies.length / ITEMS_PER_PAGE)

  const currentCompanies = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return companies.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [currentPage])

  function goToPage(page: number) {
    setSearchParams({ page: String(page) })
  }

  return {
    currentPage,
    totalPages,
    currentCompanies,
    goToPage,
  }
}
