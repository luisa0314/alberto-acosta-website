import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  es: {
    translation: {
      // Hero section
      welcome: "Bienvenidos a mi página",
      authorBio1: "Mi nombre es Alberto Acosta, escribo desde muy temprana edad, y este proceso que he mantenido durante mucho tiempo, ha estado influenciado por las experiencias con mis amigos de la juventud, cuando siendo muy jóvenes y bellos, pretendíamos conquistar y cambiar el mundo entero.",
      authorBio2: "Luego, cuando el amor tocó el corazón provocando primero grandes alegrías y casi un instante después, dulces y eternos dolores, también las letras se deslizaron por las páginas de mi vida, que antes en blanco comenzaban a verse plagadas de recuerdos y momentos humedecidos con calladas lágrimas. En fin cada aprendizaje y cada historia vivida fueron durmiendo en tinta y papel, acumulándose sin darme casi cuenta.",
      authorBio3: "Y un día comenzaron a pedirme el ver la luz, el salir a contar aquellas historias a otras almas, y así es como algunos libros están publicados, y hoy se los presento con humildad en mi corazón. Son escritos no pretenciosos, humildes tal vez, pero ante todo honestos y fieles; muy fieles a la realidad con la que se vivieron, o a la febricitante ilusión con la que se soñaron.",
      authorBio4: "Lo cierto es que al pasar del tiempo, cuando la mirada se vuelve serena y el dolor es casi un dulce perfume, se puede mirar atrás, y amar todo lo que has escrito. A todos los amo, y todos guardan la más linda esencia de los tiempos y las personas que allí habitan. Pero hay un escrito que se robó todos mis suspiros. Se llama \"El Ratoncito Nicolás\", es la más bella historia de mi vida, es la felicidad hecha palabritas, es la dicha hecha pequeños momentos inolvidables.",
      
      // Books section
      myBooks: "Mis Libros",
      booksDescription: "Descubre mi colección de obras publicadas.",
      booksSubDescription: "Cada libro está disponible para compra inmediata en Amazon con envío a todo el mundo.",
      buyBook: "Compra Tu Libro",
      
      // Book descriptions
      ratoncitoDesc: "Este pequeño libro es un viaje, nacido en la ternura de la espera, y en la emoción de ver, tocar y sentir a esa pequeña Alma, nacida del Alma mía. Carne de mi carne. El hijo de mi Corazón. Es un viaje por sus primeros años, sus primeras palabras, sus primeros pasos. Un viaje de agradecimiento a la Madre preciosa que lo llevó en su amoroso vientre y le regaló sus ojos. Y ante todo un viaje de agradecimiento a Dios, por el milagro de la Vida.",
      shermanDesc: "Un viejo solitario, un lago, un pez, una mujer, un recuerdo. La historia de un amor que nunca pudo ser, y a pesar de ello, siempre lo fue y siempre lo será.",
      tocandoDesc: "En la búsqueda de Nuestra Alma Gemela, será el Amor la Luz que nos guía por el Abismo de la Muerte?.",
      presuncionDesc: "Separados hemos recorrido todos los caminos, pero nuestras almas siempre se buscan.",
      
      // Footer
      footerText: "© 2025 Alberto Acosta. Todos los derechos reservados.",
      
      // Language selector
      language: "Idioma",
      spanish: "Español",
      english: "English",
      french: "Français",
      portuguese: "Português"
    }
  },
  en: {
    translation: {
      // Hero section
      welcome: "Welcome to my page",
      authorBio1: "My name is Alberto Acosta, I have been writing since a very early age, and this process that I have maintained for a long time has been influenced by experiences with my friends from youth, when being very young and beautiful, we intended to conquer and change the entire world.",
      authorBio2: "Then, when love touched the heart causing first great joys and almost an instant later, sweet and eternal pains, the letters also slipped through the pages of my life, which before blank began to be plagued with memories and moments moistened with silent tears. In the end, each learning and each lived story went to sleep in ink and paper, accumulating without me hardly noticing.",
      authorBio3: "And one day they began to ask me to see the light, to go out and tell those stories to other souls, and that's how some books are published, and today I present them to you with humility in my heart. They are unpretentious writings, humble perhaps, but above all honest and faithful; very faithful to the reality with which they were lived, or to the feverish illusion with which they were dreamed.",
      authorBio4: "The truth is that as time passes, when the gaze becomes serene and pain is almost a sweet perfume, you can look back, and love everything you have written. I love them all, and they all keep the most beautiful essence of the times and people who inhabit there. But there is a writing that stole all my sighs. It's called \"Little Mouse Nicolas\", it's the most beautiful story of my life, it's happiness made into little words, it's joy made into small unforgettable moments.",
      
      // Books section
      myBooks: "My Books",
      booksDescription: "Discover my collection of published works.",
      booksSubDescription: "Each book is available for immediate purchase on Amazon with worldwide shipping.",
      buyBook: "Buy Your Book",
      
      // Book descriptions
      ratoncitoDesc: "This little book is a journey, born in the tenderness of waiting, and in the emotion of seeing, touching and feeling that little Soul, born from my Soul. Flesh of my flesh. The son of my Heart. It is a journey through his first years, his first words, his first steps. A journey of gratitude to the precious Mother who carried him in her loving womb and gave him her eyes. And above all a journey of gratitude to God, for the miracle of Life.",
      shermanDesc: "A lonely old man, a lake, a fish, a woman, a memory. The story of a love that could never be, and despite that, always was and always will be.",
      tocandoDesc: "In the search for Our Soul Mate, will Love be the Light that guides us through the Abyss of Death?",
      presuncionDesc: "Separated we have traveled all the roads, but our souls always seek each other.",
      
      // Footer
      footerText: "© 2025 Alberto Acosta. All rights reserved.",
      
      // Language selector
      language: "Language",
      spanish: "Español",
      english: "English",
      french: "Français",
      portuguese: "Português"
    }
  },
  fr: {
    translation: {
      // Hero section
      welcome: "Bienvenue sur ma page",
      authorBio1: "Je m'appelle Alberto Acosta, j'écris depuis très jeune, et ce processus que j'ai maintenu pendant longtemps a été influencé par les expériences avec mes amis de jeunesse, quand étant très jeunes et beaux, nous prétendions conquérir et changer le monde entier.",
      authorBio2: "Puis, quand l'amour a touché le cœur causant d'abord de grandes joies et presque un instant après, de douces et éternelles douleurs, les lettres ont aussi glissé à travers les pages de ma vie, qui avant vides ont commencé à être remplies de souvenirs et de moments humidifiés de larmes silencieuses. En fin de compte, chaque apprentissage et chaque histoire vécue sont allés dormir dans l'encre et le papier, s'accumulant sans que je m'en aperçoive à peine.",
      authorBio3: "Et un jour ils ont commencé à me demander de voir la lumière, de sortir et raconter ces histoires à d'autres âmes, et c'est ainsi que certains livres sont publiés, et aujourd'hui je vous les présente avec humilité dans mon cœur. Ce sont des écrits sans prétention, humbles peut-être, mais surtout honnêtes et fidèles ; très fidèles à la réalité avec laquelle ils ont été vécus, ou à l'illusion fiévreuse avec laquelle ils ont été rêvés.",
      authorBio4: "La vérité est qu'au fil du temps, quand le regard devient serein et la douleur est presque un doux parfum, on peut regarder en arrière, et aimer tout ce qu'on a écrit. Je les aime tous, et ils gardent tous la plus belle essence des temps et des personnes qui y habitent. Mais il y a un écrit qui a volé tous mes soupirs. Il s'appelle \"Le Petit Souris Nicolas\", c'est la plus belle histoire de ma vie, c'est le bonheur fait de petits mots, c'est la joie faite de petits moments inoubliables.",
      
      // Books section
      myBooks: "Mes Livres",
      booksDescription: "Découvrez ma collection d'œuvres publiées.",
      booksSubDescription: "Chaque livre est disponible pour achat immédiat sur Amazon avec livraison mondiale.",
      buyBook: "Achetez Votre Livre",
      
      // Book descriptions
      ratoncitoDesc: "Ce petit livre est un voyage, né dans la tendresse de l'attente, et dans l'émotion de voir, toucher et sentir cette petite Âme, née de mon Âme. Chair de ma chair. Le fils de mon Cœur. C'est un voyage à travers ses premières années, ses premiers mots, ses premiers pas. Un voyage de gratitude envers la précieuse Mère qui l'a porté dans son ventre aimant et lui a donné ses yeux. Et surtout un voyage de gratitude envers Dieu, pour le miracle de la Vie.",
      shermanDesc: "Un vieil homme solitaire, un lac, un poisson, une femme, un souvenir. L'histoire d'un amour qui ne pouvait jamais être, et malgré cela, a toujours été et sera toujours.",
      tocandoDesc: "Dans la recherche de Notre Âme Sœur, l'Amour sera-t-il la Lumière qui nous guide à travers l'Abîme de la Mort ?",
      presuncionDesc: "Séparés nous avons parcouru tous les chemins, mais nos âmes se cherchent toujours.",
      
      // Footer
      footerText: "© 2025 Alberto Acosta. Tous droits réservés.",
      
      // Language selector
      language: "Langue",
      spanish: "Español",
      english: "English",
      french: "Français",
      portuguese: "Português"
    }
  },
  pt: {
    translation: {
      // Hero section
      welcome: "Bem-vindos à minha página",
      authorBio1: "Meu nome é Alberto Acosta, escrevo desde muito jovem, e este processo que mantenho há muito tempo foi influenciado pelas experiências com meus amigos da juventude, quando sendo muito jovens e belos, pretendíamos conquistar e mudar o mundo inteiro.",
      authorBio2: "Depois, quando o amor tocou o coração causando primeiro grandes alegrias e quase um instante depois, doces e eternos dolores, as letras também deslizaram pelas páginas da minha vida, que antes em branco começaram a se ver plagadas de lembranças e momentos umedecidos com lágrimas silenciosas. Enfim, cada aprendizado e cada história vivida foram dormindo em tinta e papel, acumulando-se sem eu quase perceber.",
      authorBio3: "E um dia começaram a me pedir para ver a luz, para sair e contar aquelas histórias para outras almas, e assim é como alguns livros estão publicados, e hoje os apresento com humildade no meu coração. São escritos não pretensiosos, humildes talvez, mas acima de tudo honestos e fiéis; muito fiéis à realidade com a qual foram vividos, ou à ilusão febril com a qual foram sonhados.",
      authorBio4: "O certo é que com o passar do tempo, quando o olhar se torna sereno e a dor é quase um doce perfume, pode-se olhar para trás, e amar tudo o que escreveu. Amo todos eles, e todos guardam a mais linda essência dos tempos e das pessoas que ali habitam. Mas há um escrito que roubou todos os meus suspiros. Chama-se \"O Ratinho Nicolás\", é a mais bela história da minha vida, é a felicidade feita palavrinhas, é a alegria feita pequenos momentos inesquecíveis.",
      
      // Books section
      myBooks: "Meus Livros",
      booksDescription: "Descubra minha coleção de obras publicadas.",
      booksSubDescription: "Cada livro está disponível para compra imediata na Amazon com envio para todo o mundo.",
      buyBook: "Compre Seu Livro",
      
      // Book descriptions
      ratoncitoDesc: "Este pequeno livro é uma viagem, nascido na ternura da espera, e na emoção de ver, tocar e sentir essa pequena Alma, nascida da minha Alma. Carne da minha carne. O filho do meu Coração. É uma viagem pelos seus primeiros anos, suas primeiras palavras, seus primeiros passos. Uma viagem de agradecimento à Mãe preciosa que o levou no seu ventre amoroso e lhe deu seus olhos. E acima de tudo uma viagem de agradecimento a Deus, pelo milagre da Vida.",
      shermanDesc: "Um velho solitário, um lago, um peixe, uma mulher, uma lembrança. A história de um amor que nunca pôde ser, e apesar disso, sempre foi e sempre será.",
      tocandoDesc: "Na busca da Nossa Alma Gêmea, será o Amor a Luz que nos guia pelo Abismo da Morte?",
      presuncionDesc: "Separados percorremos todos os caminhos, mas nossas almas sempre se procuram.",
      
      // Footer
      footerText: "© 2025 Alberto Acosta. Todos os direitos reservados.",
      
      // Language selector
      language: "Idioma",
      spanish: "Español",
      english: "English",
      french: "Français",
      portuguese: "Português"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // default language
    fallbackLng: 'es',
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;