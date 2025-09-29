import AuthorHero from '@/components/AuthorHero';
import BooksSection from '@/components/BooksSection';
import Footer from '@/components/Footer';
import FloatingContacts from '@/components/FloatingContacts';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <AuthorHero />
      <BooksSection />
      <Footer />
      <FloatingContacts />
    </div>
  );
}
