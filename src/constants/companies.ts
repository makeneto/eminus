export interface CompanyProps {
  id: string
  logo: string
  name: string
  industry: string
  qtd: number
  percent: number
  percentValue: number
  investedBalance: number
  currentBalance: number
}

export const companies: CompanyProps[] = [
  {
    id: "company-001",
    logo: "/yango-logo.png",
    name: "Yango Cars",
    industry: "Transportation",
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
    industry: "Food Service",
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
    industry: "Gold Trading",
    currentBalance: 960000,
    qtd: 2,
    percent: 1.6,
    percentValue: 80000,
    investedBalance: 500000,
  },
]
