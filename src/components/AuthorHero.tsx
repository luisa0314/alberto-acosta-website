import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

export default function AuthorHero() {
  const { t } = useTranslation();

  return (
    <section 
      className="relative py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/assets/fondo_en_cabezado.png)'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Language Selector - Fixed position */}
      <div className="absolute top-4 right-4 z-10">
        <LanguageSelector />
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 drop-shadow-lg leading-tight">
            {t('welcome')}
          </h1>
          <div className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-md space-y-3 sm:space-y-4 px-3 sm:px-4 md:px-6">
            <p>
              {t('authorBio1')}
            </p>
            <p>
              {t('authorBio2')}
            </p>
            <p>
              {t('authorBio3')}
            </p>
            <p>
              {t('authorBio4')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}