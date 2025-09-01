
import { StepCard } from './step-card';
import { ClipboardCheck, Camera, CreditCard, Car } from 'lucide-react';

const steps = [
    {
        step: "KROK 1",
        title: "ITV",
        icon: <ClipboardCheck className="w-12 h-12" />,
        frontContent: [
            "Co zabrać na ITV",
            "Co otrzymasz po"
        ],
        backContent: "Zabierz na ITV: polski dowód rejestracyjny, kartę pojazdu, certyfikat COC (jeśli masz), umowę kupna (jeśli nie jesteś właścicielem w dowodzie), dokument tożsamości. Po pozytywnym przeglądzie dostaniesz: trzy niebieskie karty pojazdu (hiszpańska “ficha técnica”), protokół z ITV oraz naklejkę na szybę.",
        gradient: "from-primary to-violet-600"
    },
    {
        step: "KROK 2",
        title: "DOKUMENTY",
        icon: <Camera className="w-12 h-12" />,
        frontContent: [
            "Zdjęcia online",
            "Szybka wycena"
        ],
        backContent: "Wystarczy, że wyślesz nam wyraźne zdjęcia karty technicznej (Ficha Técnica) po zdanym ITV oraz swojego dokumentu tożsamości (NIE lub dowód osobisty). W ciągu 48 godzin przeanalizujemy wszystko i otrzymasz dokładną wycenę.",
        gradient: "from-primary/90 to-violet-600/90"
    },
    {
        step: "KROK 3",
        title: "PŁATNOŚĆ",
        icon: <CreditCard className="w-12 h-12" />,
        frontContent: [
            "Bezpieczna płatność",
            "Odbiór w domu"
        ],
        backContent: <>Po akceptacji ceny i płatności, organizujemy kuriera po odbiór oryginałów z Twojego domu (<b>15 €</b>).</>,
        gradient: "from-primary/80 to-violet-600/80"
    },
    {
        step: "KROK 4",
        title: "GOTOWE",
        icon: <Car className="w-12 h-12" />,
        frontContent: [
            "Tymczasowe pozwolenie",
            "Ostateczna wysyłka"
        ],
        backContent: "Po zaakceptowaniu i przesłaniu dokumentów generujemy dla Ciebie pozwolenie tymczasowe, dzięki któremu możesz od razu jeździć. W ciągu kilku dni, po wydaniu przez DGT, wysyłamy Ci ostateczne prawo jazdy na Twój adres.",
        gradient: "from-primary/70 to-violet-600/70"
    }
]

export default function StepsSection() {
    return (
        <section id="proces" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
                        Załatwimy wszystko w 4 prostych krokach
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Nasz proces jest prosty, szybki i w pełni transparentny.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <StepCard key={step.title} {...step} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
