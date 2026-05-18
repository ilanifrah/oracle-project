import { createContext, useContext, useState, useEffect } from 'react';
import { T } from '../data/translations.js';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(null); // null = not yet chosen

  useEffect(() => {
    if (!language) return;
    const dir = T[language]?.dir ?? 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [language]);

  function chooseLanguage(lang) {
    setLanguage(lang);
  }

  return (
    <LanguageContext.Provider value={{ language, chooseLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
