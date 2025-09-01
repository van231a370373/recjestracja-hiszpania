import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RodoPage() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            <header className="border-b sticky top-0 bg-background/80 backdrop-blur-sm z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
                    <Link href="/" className="text-2xl font-bold font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                        RejestracjaHiszpania.com
                    </Link>
                    <Button asChild>
                        <Link href="/">
                            Powrót na stronę główną
                        </Link>
                    </Button>
                </div>
            </header>
            <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold font-headline mb-8">Informacje o RODO</h1>
                <div className="max-w-none space-y-6 text-muted-foreground">
                    <p>Poniżej znajdują się podstawowe informacje dotyczące przetwarzania danych osobowych zgodnie z RODO (ROZPORZĄDZENIE PARLAMENTU EUROPEJSKIEGO I RADY (UE) 2016/679 z dnia 27 kwietnia 2016 r.).</p>
                    
                    <h2 className="text-2xl font-bold font-headline text-foreground pt-4">Administrator Danych</h2>
                    <p>Administratorem Twoich danych osobowych jest Polska Grupa Konsultingowa SL z siedzibą w Torrevieja, Calle Matilde Peñaranda, 27, 03183.</p>

                    <h2 className="text-2xl font-bold font-headline text-foreground pt-4">Cel Przetwarzania Danych</h2>
                    <p>Twoje dane osobowe są przetwarzane wyłącznie w celu świadczenia usługi rejestracji pojazdu w Hiszpanii, w tym kontaktu z Tobą oraz obsługi niezbędnych formalności w urzędach.</p>

                    <h2 className="text-2xl font-bold font-headline text-foreground pt-4">Twoje Prawa</h2>
                    <p>Masz prawo do:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Dostępu do swoich danych osobowych.</li>
                        <li>Sprostowania (poprawienia) swoich danych.</li>
                        <li>Usunięcia danych.</li>
                        <li>Ograniczenia przetwarzania danych.</li>
                        <li>Wniesienia sprzeciwu wobec przetwarzania danych.</li>
                        <li>Przenoszenia danych.</li>
                        <li>Wniesienia skargi do organu nadzorczego.</li>
                    </ul>
                    <p>W celu skorzystania z powyższych praw, prosimy o kontakt mailowy na adres Info@rejestracjahiszpania.com.</p>
                </div>
            </main>
        </div>
    );
}
