export default function Footer() {
  const now = new Date()
  const year = now.getFullYear()

  return (
    <footer className="fixed bottom-3.5 pt-7 px-5 text-sm">
      <div className="flex gap-4">
        <span className="font-medium">Copyright © {year} Makenedev</span>
        <div className="flex gap-4 text-gray-400 font-light">
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Contact</p>
        </div>
      </div>
    </footer>
  )
}
