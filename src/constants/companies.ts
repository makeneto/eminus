interface CompaniesProps {
  id: string
  logo: string
  name: string
  qtd: number
  percent: number
  percentValue: number
  investedBalance: number
  currentBalance: number
}

export const companies: CompaniesProps[] = [
  {
    id: "company-001",
    logo: "/yango-logo.png",
    name: "Yango Cars",
    currentBalance: 960000,
    qtd: 2,
    percent: 5.6,
    percentValue: 80000,
    investedBalance: 500000,
  },
  {
    id: "company-002",
    logo: "/profile.jpeg",
    name: "Marmitas",
    currentBalance: 445000,
    qtd: 1,
    percent: 2,
    percentValue: 150000,
    investedBalance: 500000,
  },
  {
    id: "company-003",
    logo: "/eminus-dark-logo.svg",
    name: "Goldera",
    currentBalance: 960000,
    qtd: 2,
    percent: 1.6,
    percentValue: 80000,
    investedBalance: 500000,
  },
]
