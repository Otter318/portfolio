import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-3 py-2 text-base rounded ${i18n.language === 'en' ? 'bg-accent text-white' : 'text-gray-400 hover:text-white'}`}
      >
        {t('language.en')}
      </button>
      <button
        onClick={() => changeLanguage('ru')}
        className={`px-3 py-2 text-base rounded ${i18n.language === 'ru' ? 'bg-accent text-white' : 'text-gray-400 hover:text-white'}`}
      >
        {t('language.ru')}
      </button>
      <button
        onClick={() => changeLanguage('me')}
        className={`px-3 py-2 text-base rounded ${i18n.language === 'me' ? 'bg-accent text-white' : 'text-gray-400 hover:text-white'}`}
      >
        {t('language.me')}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
