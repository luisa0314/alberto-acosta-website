import { Mail } from 'lucide-react';

export default function FloatingContacts() {
  const whatsappNumber = "+573234680997";
  const whatsappMessage = "Hola Alberto, me interesa conocer más sobre tus libros";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed right-4 bottom-16 z-50 flex flex-col gap-3">
      {/* Email Icon - Primero */}
      <a
        href="mailto:acostalberto208@gmail.com"
        className="w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        title="Enviar correo electrónico"
      >
        <Mail className="w-6 h-6" />
      </a>
      
      {/* WhatsApp Icon - Segundo */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 p-2"
        title="Contactar por WhatsApp"
      >
        <img 
          src="/assets/icons/whatsapp.png" 
          alt="WhatsApp" 
          className="w-8 h-8"
        />
      </a>
    </div>
  );
}