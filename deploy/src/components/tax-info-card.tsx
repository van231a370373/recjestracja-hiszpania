import { cn } from '@/lib/utils';
import { BadgePercent } from 'lucide-react';

export default function TaxInfoCard() {
    return (
        <section className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
                <div className="group perspective-1000 w-full max-w-lg">
                    <div className={cn("relative preserve-3d w-full min-h-[24rem] rounded-xl shadow-lg transition-transform duration-700 group-hover:rotate-y-180")}>
                        {/* Front Side */}
                        <div className={cn("absolute backface-hidden w-full h-full p-6 flex flex-col items-center justify-center text-center text-white rounded-xl bg-gradient-to-br from-primary to-violet-600")}>
                            <BadgePercent className="w-12 h-12 mb-4" />
                            <h3 className="text-2xl md:text-3xl font-bold font-headline mb-2">Zaoszczędź nawet do 3000 € na podatku!</h3>
                            <p className="mt-2 text-lg font-normal">Jak możesz uzyskać zwolnienie?</p>
                        </div>
                        {/* Back Side */}
                        <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-card rounded-xl p-6 md:p-8 flex flex-col items-center justify-center text-center">
                            <h4 className="font-bold font-headline text-lg md:text-xl text-primary mb-4">Jak możesz uzyskać zwolnienie:</h4>
                            <div className="text-xs md:text-sm text-muted-foreground text-left space-y-4">
                                <div>
                                    <p className="font-semibold">Emisja CO₂ ≤ 120 g/km</p>
                                    <p>
                                    Jeśli Twój samochód (zgodnie z homologacją) emituje maksymalnie 120 g/km CO₂, nie płacisz podatku rejestracyjnego (0% w modelu 576). Zwolnienie obowiązuje w całej Hiszpanii, zarówno dla aut nowych, jak i importowanych – poziom emisji musi być wpisany w dowodzie rejestracyjnym lub karcie technicznej.
                                    </p>
                                </div>
                                <div>
                                    <p className="font-semibold">Zmiana miejsca zamieszkania</p>
                                    <p>
                                    Jeśli przeprowadzasz się do Hiszpanii (zmiana rezydencji) i przywozisz własny samochód, możesz uzyskać zwolnienie z podatku nawet jeśli emisja przekracza 120 g/km CO₂. Musisz mieszkać poza Hiszpanią minimum 12 miesięcy i mieć pojazd na siebie przez co najmniej pół roku przed przeprowadzką. O zwolnienie musisz wystąpić w urzędzie skarbowym w ciągu 1 miesiąca od przyjazdu.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
