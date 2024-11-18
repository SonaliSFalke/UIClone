import React from "react";
import Logo from "../Images/logo.jpg";
import linkedin from "../Images/linkedin.jpg";
import twit from "../Images/twit.jpg";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-white py-10">
      <div className="container mx-auto px-3 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo and Contact Information */}
        <div className="flex flex-col space-y-4">
          <img src={Logo} alt="logo-image" className="w-48" />
          <h2 className="text-lg font-semibold text-lime-400">Contact us:</h2>
          <p>Email: <a href="mailto:info@positivus.com" className="hover:underline">info@positivus.com</a></p>
          <p>Phone: <a href="tel:5555678901" className="hover:underline">555-567-8901</a></p>
          <p>Address: 1234 Main St,<br />Moonstone City, Stardust State 12345</p>
        </div>

        {/* Navigation Links and Subscription Form */}
        <div>
          <ul className="flex flex-wrap space-x-6">
            <li><a href="#about" className="hover:underline">About us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#use-cases" className="hover:underline">Use Cases</a></li>
            <li><a href="#pricing" className="hover:underline">Pricing</a></li>
            <li><a href="#blog" className="hover:underline">Blog</a></li>
          </ul>

          <form className="flex p-6 bg-customGray space-x-2 mt-12">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 p-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-lime-400 focus:outline-none text-gray-300"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-lime-400 text-gray-900 rounded-md hover:bg-lime-500 transition"
            >
              Subscribe to news
            </button>
          </form>
        </div>

        {/* Social Media Links */}
        <div className="flex mx-auto space-x-4 ">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="h-8 w-8 rounded-full hover:opacity-80 transition" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twit} alt="Twitter" className="h-8 w-8 rounded-full hover:opacity-80 transition" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="Facebook" className="h-8 w-8 rounded-full hover:opacity-80 transition" />
          </a>
        </div>
     
      </div>

         {/* Footer Bottom */}
         <div className="mt-8 border-t w-full border-gray-700 pt-4 text-center text-gray-400">
        <p>© 2023 Positivus. All Rights Reserved. <a href="#privacy" className="hover:underline">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
