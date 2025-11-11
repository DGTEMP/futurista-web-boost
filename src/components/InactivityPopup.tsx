import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const INACTIVITY_TIMEOUT = 18000; // 18 seconds
const WHATSAPP_NUMBER = '5511999999999'; // Replace with actual number

export default function InactivityPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    if (hasShown) return;

    let timeout: NodeJS.Timeout;

    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
      }, INACTIVITY_TIMEOUT);
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    
    events.forEach(event => {
      document.addEventListener(event, resetTimer, true);
    });

    resetTimer();

    return () => {
      clearTimeout(timeout);
      events.forEach(event => {
        document.removeEventListener(event, resetTimer, true);
      });
    };
  }, [hasShown]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Olá! Vim através do site e gostaria de falar com um atendente.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5 text-primary" />
            Precisa de ajuda?
          </DialogTitle>
          <DialogDescription>
            Notamos que você está navegando pelo site. Que tal falar com um de nossos especialistas agora mesmo?
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 pt-4">
          <Button onClick={handleWhatsAppClick} className="w-full" size="lg">
            <MessageCircle className="mr-2 h-5 w-5" />
            Falar com Atendente
          </Button>
          <Button onClick={() => setIsOpen(false)} variant="outline" className="w-full">
            Continuar Navegando
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
