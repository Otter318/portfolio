import React from 'react';
import { useTranslation } from 'react-i18next';
import PhotoCarousel from '../components/PhotoCarousel';

const HomePage = () => {
    const { t } = useTranslation();

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
        <div>
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
                                <p className="text-lg text-gray-300">React, Vue, HTML5, CSS3, JavaScript, TypeScript, Tailwind CSS</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-medium text-accent mb-2">{t('skills.backend')}</h4>
                                <p className="text-lg text-gray-300">Node.js, Flask, PHP, MySQL, PostgreSQL, LiteSQL, AOuth, phpmailer</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-medium text-accent mb-2">{t('skills.tools')}</h4>
                                <p className="text-lg text-gray-300">Git, Docker, Vite, CI/CD</p>
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
                    </form>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
