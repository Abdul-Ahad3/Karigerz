
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-earthy-soil text-white">
      <div className="container-padding max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-serif mb-4">Karigarz</h3>
            <p className="text-sm text-gray-200 mb-4">
              Connecting traditional artisans from Pakistan to a global audience, preserving cultural heritage one craft at a time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-earthy-sand transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-earthy-sand transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="hover:text-earthy-sand transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-earthy-sand transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-earthy-sand transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/artisans" className="hover:text-earthy-sand transition-colors">Artisans</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-earthy-sand transition-colors">Our Story</Link>
              </li>
              <li>
                <Link to="/customize" className="hover:text-earthy-sand transition-colors">Request Custom</Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-serif mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products?category=textiles" className="hover:text-earthy-sand transition-colors">Textiles</Link>
              </li>
              <li>
                <Link to="/products?category=pottery" className="hover:text-earthy-sand transition-colors">Pottery</Link>
              </li>
              <li>
                <Link to="/products?category=jewelry" className="hover:text-earthy-sand transition-colors">Jewelry</Link>
              </li>
              <li>
                <Link to="/products?category=woodwork" className="hover:text-earthy-sand transition-colors">Woodwork</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-serif mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Lahore, Pakistan</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@karigarz.com" className="hover:text-earthy-sand transition-colors">karigarz.artisans.pk@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-300 text-center">
          <p>&copy; {new Date().getFullYear()} Karigarz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
