
import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Footer from './Footer';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    scrollPosition > 20 ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
  }`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className={navbarClasses}>
        <div className="container-padding max-w-7xl mx-auto">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <h1 className="text-xl md:text-2xl font-serif font-semibold text-earthy-soil">
                Karigarz
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className={`font-medium hover:text-earthy-clay transition-colors ${
                  location.pathname === '/' ? 'text-earthy-clay' : 'text-foreground'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`font-medium hover:text-earthy-clay transition-colors ${
                  location.pathname.includes('/products') ? 'text-earthy-clay' : 'text-foreground'
                }`}
              >
                Products
              </Link>
              <Link 
                to="/artisans" 
                className={`font-medium hover:text-earthy-clay transition-colors ${
                  location.pathname.includes('/artisans') ? 'text-earthy-clay' : 'text-foreground'
                }`}
              >
                Artisans
              </Link>
              <Link 
                to="/about" 
                className={`font-medium hover:text-earthy-clay transition-colors ${
                  location.pathname === '/about' ? 'text-earthy-clay' : 'text-foreground'
                }`}
              >
                Our Story
              </Link>
              <Link 
                to="/cartshop" 
                className="bg-earthy-clay text-white px-4 py-2 rounded-md font-medium hover:bg-earthy-soil transition-colors"
              >
                Cart
              </Link>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="flex flex-col container-padding py-4 space-y-4">
              <Link 
                to="/" 
                className={`font-medium py-2 hover:text-earthy-clay transition-colors ${
                  location.pathname === '/' ? 'text-earthy-clay' : 'text-foreground'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`font-medium py-2 hover:text-earthy-clay transition-colors ${
                  location.pathname.includes('/products') ? 'text-earthy-clay' : 'text-foreground'
                }`}
              >
                Products
              </Link>
              <Link 
                to="/artisans" 
                className={`font-medium py-2 hover:text-earthy-clay transition-colors ${
                  location.pathname.includes('/artisans') ? 'text-earthy-clay' : 'text-foreground'
                }`}
              >
                Artisans
              </Link>
              <Link 
                to="/about" 
                className={`font-medium py-2 hover:text-earthy-clay transition-colors ${
                  location.pathname === '/about' ? 'text-earthy-clay' : 'text-foreground'
                }`}
              >
                Our Story
              </Link>
              <Link 
                to="/customize" 
                className="bg-earthy-clay text-white px-4 py-2 rounded-md font-medium hover:bg-earthy-soil transition-colors inline-block w-full text-center"
              >
                Cart
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
