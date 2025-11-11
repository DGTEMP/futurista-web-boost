import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Zap, MessageCircle } from 'lucide-react';

const SCROLL_THRESHOLD = 3000; // 3000px scrolled in short time indicates rapid scrolling
const TIME_WINDOW = 3000; // 3 seconds
const WHATSAPP_NUMBER = '5511999999999'; // Replace with actual number

export default function RapidScrollPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (hasShown) return;

    let lastScrollY = window.scrollY;
    let lastScrollTime = Date.now();
    let totalScrollDistance = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const currentTime = Date.now();
      const timeDiff = currentTime - lastScrollTime;
      const scrollDiff = Math.abs(currentScrollY - lastScrollY);

      if (timeDiff < TIME_WINDOW) {
        totalScrollDistance += scrollDiff;

        if (totalScrollDistance > SCROLL_THRESHOLD) {
          setIsOpen(true);
          setHasShown(true);
        }
      } else {
        // Reset if too much time has passed
        totalScrollDistance = scrollDiff;
      }

      lastScrollY = currentScrollY;
      lastScrollTime = currentTime;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Vi que vocês oferecem atendimento diferenciado. Gostaria de saber mais!');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Atendimento Diferenciado
          </DialogTitle>
          <DialogDescription>
            Percebemos que você está procurando algo específico! Nossa equipe pode te ajudar a encontrar exatamente o que você precisa, com agilidade e qualidade.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-4">
          <Button onClick={handleWhatsAppClick} className="w-full" size="lg">
            <MessageCircle className="mr-2 h-5 w-5" />
            Quero Atendimento Personalizado
          </Button>
          <Button onClick={() => setIsOpen(false)} variant="outline" className="w-full">
            Continuar Explorando
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
