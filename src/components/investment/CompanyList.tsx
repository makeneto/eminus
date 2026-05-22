import { Maximize2, Plus } from "lucide-react"

import Frame from "../ui/Frame"
import FrameHeader from "../ui/FrameHeader"
import { Button } from "../ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination"

import { CompanyCard } from "./CompanyCard"
import { useCompaniesPagination } from "@/hooks/useCompaniesPagination"

export function CompanyList() {
  const { currentPage, totalPages, currentCompanies, goToPage } =
    useCompaniesPagination()

  return (
    <Frame>
      <FrameHeader title="My Companies">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="border-">
            <Plus />
            Add Company
          </Button>

          <Button variant="ghost" size="xs" className="border-">
            <Maximize2 />
          </Button>
        </div>
      </FrameHeader>

      <ul className="invest__companies">
        {currentCompanies.map((company) => (
          <CompanyCard key={company.id} company={company} />
        ))}
      </ul>

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1

              return (
                <PaginationItem key={page}>
                  <PaginationLink
                    href={`?page=${page}`}
                    isActive={currentPage === page}
                    onClick={(e) => {
                      e.preventDefault()
                      goToPage(page)
                    }}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              )
            })}
          </PaginationContent>
        </Pagination>
      )}
    </Frame>
  )
}
