import { createFileRoute, Link } from '@tanstack/react-router';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/solicitud-completada')({
  component: SuccessPage,
});

function SuccessPage() {
  return (
    <div className="min-h-screen bg-muted/20 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-industrial border border-border p-8 md:p-10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-2xl md:text-3xl font-display font-bold text-ink mb-4 uppercase">
          ¡Solicitud Enviada!
        </h1>
        <p className="text-muted-foreground mb-8 text-base md:text-lg">
          Recibimos tus datos correctamente. Nos estaremos comunicando a la brevedad para enviarte la cotización sin cargo.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 w-full bg-ink text-white font-medium py-3 px-6 rounded-md hover:bg-ink/90 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
}
