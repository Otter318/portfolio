import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HomePage from './pages/HomePage';
import LifeOutsidePage from './pages/LifeOutsidePage';
import LanguageSwitcher from './components/LanguageSwitcher';
import './App.css';

function App() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Close menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('#mobile-menu-button') && !event.target.closest('#menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <Router>
      <div className="min-h-screen bg-primary text-white">
        <header className="sticky top-0 bg-secondary shadow-md z-10">
          <nav className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
            <Link to="/" className="text-2xl font-bold">Portfolio</Link>

            <div className="block lg:hidden">
              <button
                id="mobile-menu-button"
                className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>

            <div
              className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto w-full`}
              id="menu"
            >
              <div className="text-base lg:flex-grow flex flex-col lg:flex-row lg:space-x-6">
                <Link
                  to="/"
                  className="block py-2 lg:inline-block lg:py-0 text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.home')}
                </Link>
                <Link
                  to="/life-outside"
                  className="block py-2 lg:inline-block lg:py-0 text-gray-300 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('header.lifeOutside')}
                </Link>
              </div>
              <div className="mt-4 lg:mt-0">
                <LanguageSwitcher />
              </div>
            </div>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/life-outside" element={<LifeOutsidePage />} />
          </Routes>
        </main>

        <footer className="bg-secondary py-8 mt-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-lg text-gray-400">© 2025 - {t('footer.rights')}</p>
              <p className="text-lg text-gray-400 mt-3 md:mt-0">{t('footer.madeWith')}</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
