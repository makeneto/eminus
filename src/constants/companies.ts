interface CompaniesProps {
  id: string
  logo: string
  name: string
  currentBalance: number
  qtd: number
  percent: number
  percentValue: number
}

export const companies: CompaniesProps[] = [
  {
    id: "company-001",
    logo: "/yango-logo.png",
    name: "Yango Cars",
    currentBalance: 960000,
    qtd: 2,
    percent: 1.6,
    percentValue: 80000,
  },
  {
    id: "company-002",
    logo: "/yango-logo.png",
    name: "Goldera",
    currentBalance: 128000,
    qtd: 1,
    percent: 1.8,
    percentValue: 60000,
  },
  {
    id: "company-003",
    logo: "/yango-logo.png",
    name: "Marmitas",
    currentBalance: 445000,
    qtd: 1,
    percent: 2,
    percentValue: 150000,
  },
]
