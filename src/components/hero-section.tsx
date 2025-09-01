import { Button } from "@/components/ui/button";
import { Car, FileText, MoveRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-32 pb-20 md:pt-48 md:pb-32">
            <div className="absolute inset-0 animated-gradient opacity-90"></div>
            
            <Car className="absolute top-1/4 left-1/4 w-16 h-16 text-white/10 animate-pulse -translate-x-1/2 -translate-y-1/2 opacity-0 md:opacity-100" style={{ animationDelay: '1s' }} />
            <FileText className="absolute top-1/2 right-1/4 w-20 h-20 text-white/10 animate-pulse opacity-0 md:opacity-100" style={{ animationDelay: '2s' }} />
            <Car className="absolute bottom-1/4 right-1/5 w-12 h-12 text-white/10 animate-pulse opacity-0 md:opacity-100" style={{ animationDelay: '3s' }} />
            <FileText className="absolute bottom-1/3 left-1/5 w-14 h-14 text-white/10 animate-pulse opacity-0 md:opacity-100" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight text-white animate-fade-in-up" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                    PRZEREJESTROWANIE SAMOCHODU W HISZPANII
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-white/90 animate-fade-in-up" style={{ animationDelay: '0.2s', textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                    Kompletna obsługa w języku polskim - 250€ + podatki
                </p>
                <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-white/80 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    Wystarczy zdjęcie karty technicznej po ITV. Dokładna wycena w 48h, załatwiamy wszystko za Ciebie.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90 shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <a href="#kontakt">
                          DARMOWA WYCENA
                          <MoveRight className="ml-2" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    )
}
