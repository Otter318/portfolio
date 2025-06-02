import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import PhotoCarousel from './components/PhotoCarousel';

function App() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Close menu when clicking outside
  useEffect(() => {
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
  
  // Sample images for the carousel
  const carouselImages = [
    {
      src: "https://via.placeholder.com/800x500/333/fff?text=Project+1",
      alt: "Project 1",
      caption: t('carousel.image1')
    },
    {
      src: "https://via.placeholder.com/800x500/333/fff?text=Project+2",
      alt: "Project 2",
      caption: t('carousel.image2')
    },
    {
      src: "https://via.placeholder.com/800x500/333/fff?text=Project+3",
      alt: "Project 3",
      caption: t('carousel.image3')
    }
  ];

  return (
    <div className="min-h-screen bg-primary text-white">
      <header className="sticky top-0 bg-secondary shadow-md z-10">
        <nav className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
          <div className="text-2xl font-bold">Portfolio</div>
          
          <div className="block lg:hidden">
            <button 
              id="mobile-menu-button"
              className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
          </div>
          
          <div 
            className={`${isMenuOpen ? 'block' : 'hidden'} lg:flex lg:items-center lg:w-auto w-full`} 
            id="menu"
          >
            <div className="text-base lg:flex-grow flex flex-col lg:flex-row lg:space-x-6">
              <a href="#home" className="block py-2 lg:inline-block lg:py-0 text-gray-300 hover:text-white">
                {t('header.home')}
              </a>
              <a href="#about" className="block py-2 lg:inline-block lg:py-0 text-gray-300 hover:text-white">
                {t('header.about')}
              </a>
              <a href="#skills" className="block py-2 lg:inline-block lg:py-0 text-gray-300 hover:text-white">
                {t('header.skills')}
              </a>
              <a href="#projects" className="block py-2 lg:inline-block lg:py-0 text-gray-300 hover:text-white">
                {t('header.projects')}
              </a>
              <a href="#contact" className="block py-2 lg:inline-block lg:py-0 text-gray-300 hover:text-white">
                {t('header.contact')}
              </a>
            </div>
            <div className="mt-4 lg:mt-0">
              <LanguageSwitcher />
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="section container mx-auto">
          <div className="flex flex-col items-center justify-center min-h-[80vh]">
            <p className="text-xl sm:text-2xl text-gray-400">{t('hero.greeting')}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 mb-6 text-center">{t('hero.name')}</h1>
            <p className="text-2xl sm:text-3xl text-accent mb-8">{t('hero.title')}</p>
            <p className="text-lg sm:text-xl text-center max-w-2xl text-gray-300 px-4">{t('hero.description')}</p>
          </div>
        </section>

        <section id="projects" className="section container mx-auto bg-secondary py-12 sm:py-16 rounded-lg px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center">{t('carousel.title')}</h2>
          <div className="max-w-4xl mx-auto">
            <PhotoCarousel images={carouselImages} />
          </div>
        </section>

        <section id="about" className="section container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">{t('about.title')}</h2>
              <p className="mb-6 text-lg text-gray-300">{t('about.description')}</p>
              <div className="mt-6 space-y-3">
                <p className="text-lg text-gray-300">{t('about.age')}</p>
                <p className="text-lg text-gray-300">{t('about.location')}</p>
                <p className="text-lg text-gray-300">{t('about.languages')}</p>
              </div>
            </div>
            <div className="bg-secondary rounded-lg p-6 sm:p-8">
              <h3 className="text-2xl font-semibold mb-6">{t('skills.title')}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-medium text-accent mb-2">{t('skills.frontend')}</h4>
                  <p className="text-lg text-gray-300">React, Vue, Angular, HTML5, CSS3, JavaScript, TypeScript, Tailwind CSS</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-accent mb-2">{t('skills.backend')}</h4>
                  <p className="text-lg text-gray-300">Node.js, Express, Django, Flask, PHP, MySQL, PostgreSQL, MongoDB</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-accent mb-2">{t('skills.tools')}</h4>
                  <p className="text-lg text-gray-300">Git, Docker, AWS, Firebase, Webpack, Vite, Jest, Cypress</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">{t('contact.title')}</h2>
          <div className="max-w-md mx-auto mt-8">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">{t('contact.name')}</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded bg-secondary border border-accent text-white text-lg focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">{t('contact.email')}</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded bg-secondary border border-accent text-white text-lg focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">{t('contact.message')}</label>
                <textarea id="message" rows="4" className="w-full px-4 py-3 rounded bg-secondary border border-accent text-white text-lg focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
              </div>
              <button type="submit" className="w-full btn btn-primary text-lg py-3">{t('contact.send')}</button>
            </form>
          </div>
        </section>
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
  );
}

export default App;
