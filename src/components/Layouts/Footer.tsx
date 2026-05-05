export default function Footer() {
  const now = new Date()
  const year = now.getFullYear()

  return (
    <footer className="bg-white w-full fixed bottom-0 pt-3 pb-4 px-5 text-sm">
      <div className="flex gap-4">
        <span className="font-medium">Copyright © {year} Eminus</span>
        <div className="flex gap-4 text-gray-400 font-light">
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Contact</p>
        </div>
      </div>
    </footer>
  )
}
