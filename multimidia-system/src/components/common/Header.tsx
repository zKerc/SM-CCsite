import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { title: 'Página Inicial', path: '/' },
    { title: 'Calendário', path: '/calendario' },
    { title: 'Plano de Curso', path: '/plano-curso' },
    { title: 'Matriz Curricular', path: '/fluxograma' },
    { title: 'Professores', path: '/professores' },
    { title: 'Estágios', path: '/estagios' },
    { title: 'TCC', path: '/tcc' },
    { title: 'Formulários', path: '/formularios' },
  ];

  // Função para verificar se o item está ativo
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <header className="bg-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-2 sm:px-4 py-2.5 sm:py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
          <div className="bg-white p-1 rounded-lg flex-shrink-0">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/7/77/Marca-da-UEPB-Aplica%C3%A7%C3%A3o-Colorida-em-PNG-1.png" 
              alt="Logo UEPB" 
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
            />
          </div>
          <div className="truncate flex flex-col">
            <h1
              className="
                text-xs
                xs:text-sm
                sm:text-base
                md:text-xl
                font-bold
                truncate
                leading-tight
                "
              style={{
                lineHeight: '1.1',
                // Garante que o texto diminua em telas pequenas
                fontSize: 'clamp(0.75rem, 4vw, 1.25rem)'
              }}
            >
              Computação - UEPB
            </h1>
            <p className="text-[10px] xs:text-xs sm:text-xs">Campus I</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-3 sm:space-x-6 items-center relative">
          {navItems.slice(0, 4).map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className={`${isActive(item.path) ? 'text-blue-300 font-semibold' : 'hover:text-blue-200'} transition-colors text-sm sm:text-base`}
            >
              {item.title}
            </Link>
          ))}
          <div className="relative" ref={dropdownRef}>
            <button
              className="inline-flex bg-white text-blue-700 md:text-blue-800 px-3 py-1.5 rounded hover:bg-blue-100 transition-colors font-medium text-sm sm:text-base items-center"
              onClick={() => setIsDropdownOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              type="button"
            >
              {/* Ícone de menu (hamburger) para o dropdown */}
              <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-blue-900 rounded shadow-lg border border-blue-900 z-50 py-2">
                {navItems.slice(4).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-5 py-2 text-white hover:bg-blue-700 transition-colors text-sm ${isActive(item.path) ? 'font-semibold bg-blue-700' : ''}`}
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button (hamburger) */}
        <button 
          className="md:hidden focus:outline-none ml-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          {/* Ícone de menu (hamburger) */}
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-900 py-3 px-2 sm:px-4">
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`block py-2 px-3 rounded transition-colors text-center text-sm ${isActive(item.path) ? 'bg-blue-700' : 'bg-blue-800 hover:bg-blue-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;