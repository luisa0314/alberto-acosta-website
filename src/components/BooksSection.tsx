import { useTranslation } from 'react-i18next';

// Datos de los libros de Alberto Acosta
const featuredBook = {
  id: 'featured',
  title: 'El Ratoncito Nicolás (Spanish Edition)',
  author: 'Alberto Acosta',
  coverImage: '/assets/ratoncito_nicolas.jpg',
  descriptionKey: 'ratoncitoDesc'
};

const otherBooks = [
  {
    id: '1',
    title: 'El General Sherman. (Spanish Edition)',
    author: 'Alberto Acosta',
    descriptionKey: 'shermanDesc',
    coverImage: '/assets/el_general_sherman.jpeg'
  },
  {
    id: '2',
    title: 'Tocando a las Puertas del Cielo. (Spanish Edition)',
    author: 'Alberto Acosta',
    descriptionKey: 'tocandoDesc',
    coverImage: '/assets/tocando_las_puertas_del_cielo.jpeg'
  },
  {
    id: '3',
    title: 'Presunción de Poema (Spanish Edition)',
    author: 'Alberto Acosta',
    descriptionKey: 'presuncionDesc',
    coverImage: '/assets/presuncion_de_poema.jpeg'
  }
];

export default function BooksSection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight px-2">
            {t('myBooks')}
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-3 sm:px-4 leading-relaxed">
            {t('booksDescription')}<br />
            {t('booksSubDescription')}
          </p>
        </div>
        
        {/* Libro destacado - centrado */}
        <div className="flex justify-center mb-8 sm:mb-12 px-2 sm:px-4">
          <div className="text-center bg-white rounded-lg shadow-lg p-3 xs:p-4 sm:p-6 max-w-xs xs:max-w-sm sm:max-w-md w-full">
            <img 
              src={featuredBook.coverImage} 
              alt={featuredBook.title}
              className="w-40 h-52 xs:w-48 xs:h-64 sm:w-72 sm:h-96 object-cover rounded-md mx-auto mb-3 sm:mb-4 shadow-md"
            />
            <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 leading-tight px-1">{featuredBook.title}</h3>
            <p className="text-xs xs:text-sm sm:text-base text-slate-600 mb-2 sm:mb-3">{featuredBook.author}</p>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-3 sm:mb-4 text-justify px-2 sm:px-3 hyphens-auto break-words">{t(featuredBook.descriptionKey)}</p>
            <button 
              onClick={() => {
                window.open("https://www.amazon.com/stores/author/B07HYBPCT3/allbooks?ingress=0&visitId=fc4f216b-0ccb-494d-97d7-c4fed01f8fc8&ref_=ap_rdr", '_blank');
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-3 xs:px-4 sm:px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-xs xs:text-sm sm:text-base w-full sm:w-auto"
            >
              {t('buyBook')}
            </button>
          </div>
        </div>
        
        {/* Otros libros - en fila */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto px-2 sm:px-4">
          {otherBooks.map((book) => (
            <div key={book.id} className="bg-white rounded-lg shadow-lg p-3 xs:p-4 sm:p-6 text-center flex flex-col h-full">
              <img 
                src={book.coverImage} 
                alt={book.title}
                className="w-40 h-52 xs:w-48 xs:h-64 sm:w-56 sm:h-72 object-cover rounded-md mx-auto mb-3 sm:mb-4 shadow-md"
              />
              <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold text-slate-900 mb-2 leading-tight px-1 hyphens-auto break-words">{book.title}</h3>
              <p className="text-xs xs:text-sm sm:text-base text-slate-600 mb-2 sm:mb-3">{book.author}</p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-3 sm:mb-4 flex-grow text-justify px-1 sm:px-2 hyphens-auto break-words">{t(book.descriptionKey)}</p>
              <button 
                onClick={() => {
                  window.open("https://www.amazon.com/stores/author/B07HYBPCT3/allbooks?ingress=0&visitId=fc4f216b-0ccb-494d-97d7-c4fed01f8fc8&ref_=ap_rdr", '_blank');
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-3 xs:px-4 sm:px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-auto text-xs xs:text-sm sm:text-base"
              >
                {t('buyBook')}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}