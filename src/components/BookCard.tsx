import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface Book {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  amazonUrl: string;
  genre?: string;
  publishYear?: string;
}

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="aspect-[3/4] relative overflow-hidden rounded-t-lg">
          <img
            src={book.coverImage}
            alt={`Portada de ${book.title}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://via.placeholder.com/300x400/e2e8f0/64748b?text=${encodeURIComponent(book.title)}`;
            }}
          />
        </div>
      </CardHeader>
      
      <CardContent className="flex-1 p-6">
        <CardTitle className="text-xl mb-2 line-clamp-2">{book.title}</CardTitle>
        {book.genre && (
          <p className="text-sm text-muted-foreground mb-2">{book.genre}</p>
        )}
        {book.publishYear && (
          <p className="text-sm text-muted-foreground mb-3">Año: {book.publishYear}</p>
        )}
        <CardDescription className="text-sm leading-relaxed">
          {book.description}
        </CardDescription>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button 
          asChild 
          className="w-full bg-orange-600 hover:bg-orange-700"
        >
          <a 
            href={book.amazonUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            Comprar en Amazon
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}