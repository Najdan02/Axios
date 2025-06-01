import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Clients", path: "/clients" },
    { name: "Contacts", path: "/contacts" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 50) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [currentPath]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 bg-white shadow-md z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="px-4 md:px-8 py-4 flex justify-between items-center">
        <div className="cursor-pointer">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Axios Logo"
              width={50}
              height={100}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`px-4 py-2 font-medium transition-colors duration-300 hover:text-[#01B2FE] 
                ${
                  currentPath === item.path
                    ? "text-[#01B2FE] border-b-2 border-[#01B2FE]"
                    : "text-gray-700"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-gray-800 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-gray-800 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-gray-800 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-64 border-t border-gray-100' : 'max-h-0'
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block px-8 py-4 font-medium transition-colors duration-300 hover:bg-gray-50
              ${
                currentPath === item.path
                  ? "text-[#01B2FE] border-l-4 border-[#01B2FE] bg-blue-50"
                  : "text-gray-700"
              }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
