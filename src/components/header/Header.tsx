import Profile from "./Profile"

interface HeaderProps {
  title: string
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="headerPage">
      <h1>{title}</h1>
      <Profile />
    </header>
  )
}
