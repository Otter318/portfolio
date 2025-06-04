import React from 'react';
import { useTranslation } from 'react-i18next';

const LifeOutsidePage = () => {
    const { t } = useTranslation();

    // Sample cat photos
    const catPhotos = [
        {
            src: "https://via.placeholder.com/400x300/333/fff?text=Cat+Photo+1",
            alt: t('lifeOutside.catPhoto1'),
            caption: t('lifeOutside.catPhoto1')
        },
        {
            src: "https://via.placeholder.com/400x300/333/fff?text=Cat+Photo+2",
            alt: t('lifeOutside.catPhoto2'),
            caption: t('lifeOutside.catPhoto2')
        },
        {
            src: "https://via.placeholder.com/400x300/333/fff?text=Cat+Photo+3",
            alt: t('lifeOutside.catPhoto3'),
            caption: t('lifeOutside.catPhoto3')
        }
    ];

    // Sample hobbies with icons
    const hobbies = [
        {
            icon: "🏊‍♂️",
            name: "Swimming",
            description: "I enjoy swimming in the beautiful beaches of Montenegro."
        },
        {
            icon: "📚",
            name: "Reading",
            description: "I love reading technical books and science fiction novels."
        },
        {
            icon: "🏔️",
            name: "Hiking",
            description: "Exploring the mountains and nature trails around Montenegro."
        },
        {
            icon: "🎮",
            name: "Gaming",
            description: "Playing strategy games and RPGs to unwind after coding."
        }
    ];

    return (
        <div className="py-12 sm:py-16">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">{t('lifeOutside.title')}</h1>
                <p className="text-xl text-gray-300 text-center mb-12">{t('lifeOutside.subtitle')}</p>

                {/* Hobbies Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6">{t('lifeOutside.hobbies')}</h2>
                    <p className="text-lg text-gray-300 mb-8">{t('lifeOutside.hobbiesDescription')}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {hobbies.map((hobby, index) => (
                            <div key={index} className="bg-secondary rounded-lg p-6 hover:shadow-lg transition-shadow">
                                <div className="text-4xl mb-4">{hobby.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{hobby.name}</h3>
                                <p className="text-gray-300">{hobby.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cats Section */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold mb-6">{t('lifeOutside.cats')}</h2>
                    <p className="text-lg text-gray-300 mb-8">{t('lifeOutside.catsDescription')}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {catPhotos.map((photo, index) => (
                            <div key={index} className="bg-secondary rounded-lg overflow-hidden shadow-lg">
                                <img
                                    src={photo.src}
                                    alt={photo.alt}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4">
                                    <p className="text-lg font-medium">{photo.caption}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LifeOutsidePage;
