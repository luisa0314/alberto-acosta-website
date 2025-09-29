import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const languages = [
  { code: 'es', name: 'spanish', flag: '🇪🇸' },
  { code: 'en', name: 'english', flag: '🇺🇸' },
  { code: 'fr', name: 'french', flag: '🇫🇷' },
  { code: 'pt', name: 'portuguese', flag: '🇧🇷' },
];

export default function LanguageSelector() {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="bg-white/90 backdrop-blur-sm hover:bg-white/95 border-gray-200 shadow-md"
        >
          <Globe className="h-4 w-4 mr-2" />
          <span className="mr-1">{currentLanguage.flag}</span>
          <span className="hidden sm:inline">{t(currentLanguage.name)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-sm">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className="cursor-pointer hover:bg-gray-100/80"
          >
            <span className="mr-2">{language.flag}</span>
            {t(language.name)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}