import React from "react"

export default function Header() {
  return (
   <>
     <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">MyLogo</div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-200">Home</a>
          
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
        //   onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={` bg-blue-700`}>
        <nav className="flex flex-col space-y-2 p-4">
          <a href="#home" className="hover:text-gray-300">Home</a>
        
        </nav>
      </div>
    </header>
   </>
  )
}
