export default function useGreetings() {
  const getGreeting = (hour: number): string => {
    if (hour < 12) return "Good Morning! 🌤️"
    if (hour < 18) return "Good Afternoon! ☀️"
    return "Good Evening! 🌙"
  }

  const hour = new Date().getHours()
  const greeting = getGreeting(hour)

  return greeting
}
