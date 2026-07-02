import { createFileRoute } from '@tanstack/react-router';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { Header, Footer, Gallery, WA_NUMBER } from './index';

export const Route = createFileRoute('/solicitud-completada')({
  component: SuccessPage,
});

function SuccessPage() {
  const waMessage = "Hola, ya he enviado mi solicitud de presupuesto";
  const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMessage)}`;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-white py-16 md:py-24 border-b border-border/50">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <div className="bg-white rounded-2xl shadow-industrial border border-border p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
              
              <div className="mx-auto w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-display font-bold text-ink mb-4 uppercase tracking-tight">
                ¡Hemos recibido tu pedido!
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Un asesor está analizando los detalles de tu solicitud para armar la cotización. Te contactaremos a la brevedad.
              </p>

              <div className="bg-muted/30 rounded-xl p-6 md:p-10 border border-border max-w-2xl mx-auto">
                <h2 className="text-xl md:text-2xl font-bold text-ink mb-3 font-display uppercase tracking-tight">
                  ¿Estás apurado y querés el presupuesto YA?
                </h2>
                <p className="text-muted-foreground mb-8 text-base">
                  Si no querés esperar, envianos un mensaje directo por WhatsApp y te pasaremos el presupuesto al instante.
                </p>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#25D366] text-white font-display uppercase tracking-wider py-4 px-10 rounded-full hover:bg-[#20bd5a] transition-all shadow-md text-base"
                >
                  <MessageCircle className="w-6 h-6" />
                  Hablar por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="bg-muted/20 pt-16 -mb-20 relative z-10">
          <div className="text-center px-4 max-w-3xl mx-auto">
            <p className="text-xl text-ink font-medium leading-relaxed">
              Mientras preparamos tu presupuesto, te invitamos a ver la calidad de nuestros últimos trabajos instalados.
            </p>
          </div>
        </div>
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}
