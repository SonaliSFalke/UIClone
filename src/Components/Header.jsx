import React, {useState} from 'react'
import logo from '../Images/logo.jpg'
function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="sm:p-4 bg-white-800 text-black">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo-image"><img src={logo} alt="logo-image" /></div>

         {/* Mobile Menu Icon */}
         <div className="md:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isMenuOpen ? 'X' : '☰'} {/* Toggling between hamburger and close */}
            </button>
          </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 capitalize">
          <li className="hover:text-gray-400 cursor-pointer">about us</li>
          <li className="hover:text-gray-400 cursor-pointer">Services</li>
          <li className="hover:text-gray-400 cursor-pointer">Use Cases</li>
          <li className="hover:text-gray-400 cursor-pointer">Pricing</li>
          <li className="hover:text-gray-400 cursor-pointer">Blog</li>
        </ul>

        {/* Call-to-Action Button */}
        <button className="bg-white-500 text-black px-4 py-2 rounded-lg hidden md:block btn-req ">
         Request a quote
        </button>
      </div>

      {/* Mobile Menu (on smaller screens) */}
      {isMenuOpen && (
          <div className="md:hidden bg-gray-100 p-4 space-y-4">
            <ul className="space-y-4 capitalize">
              <li className="hover:text-gray-400 cursor-pointer">about us</li>
              <li className="hover:text-gray-400 cursor-pointer">Services</li>
              <li className="hover:text-gray-400 cursor-pointer">Use Cases</li>
              <li className="hover:text-gray-400 cursor-pointer">Pricing</li>
              <li className="hover:text-gray-400 cursor-pointer">Blog</li>
            </ul>
            <button className="bg-white-500 text-black px-4 py-2 btn-req rounded-lg w-full mt-4">
              Request a quote
            </button>
          </div>
        )}
    </nav>
    </div>
  )
}

export default Header
