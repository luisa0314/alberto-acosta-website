import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center">
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Alberto Acosta</h3>
          <p className="text-slate-300 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm xs:text-base sm:text-lg leading-relaxed px-2 sm:px-4">
            Gracias por visitar mi página oficial.<br />
            Si tienes alguna pregunta sobre mis libros o deseas ponerte en contacto, no dudes en hacerlo.
          </p>

          <div className="border-t border-slate-700 pt-4 sm:pt-6">
            <p className="text-slate-400 text-xs xs:text-sm leading-relaxed">
              {t('footerText')}
            </p>
            <p className="text-slate-400 text-xs xs:text-sm mt-1 sm:mt-2">
              Libros disponibles en Amazon
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}