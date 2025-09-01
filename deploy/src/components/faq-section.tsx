import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "Ile trwa cały proces?",
        answer: "Cały proces od momentu zdania ITV do otrzymania tymczasowego pozwolenia na jazdę trwa zazwyczaj od 24 do 72 godzin roboczych. Ostateczny dowód rejestracyjny i tablice docierają w ciągu kilku tygodni."
    },
    {
        question: "Czy mogę jeździć podczas oczekiwania?",
        answer: "Tak! Jak tylko Twoje dokumenty zostaną przetworzone w urzędzie (DGT), otrzymasz od nas tymczasowe pozwolenie na jazdę (autorización temporal de circulación), które jest w pełni legalne i pozwala na poruszanie się po całej Hiszpanii."
    },
    {
        question: "Co jeśli nie mam europejskiego certyfikatu zgodności (COC)?",
        answer: (
            <div className="space-y-4">
                <p>
                    Jeśli nie posiadasz europejskiego certyfikatu zgodności (COC), możesz go łatwo zamówić online. Wystarczy podać numer VIN i markę/model pojazdu.
                    COC jest wymagany do rejestracji samochodu sprowadzonego z zagranicy oraz podczas przeglądu technicznego (ITV) w Hiszpanii.
                </p>
                <p className="font-medium">Gdzie zamówić COC online:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li><a href="https://www.coc-online.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">COC-Online.com</a></li>
                    <li><a href="https://cocservices.eu/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">COCServices.eu</a></li>
                    <li><a href="https://www.getcoc.eu/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">GetCOC.eu</a></li>
                </ul>
                <p>
                    W większości przypadków oryginał dokumentu zostanie wysłany pocztą na Twój adres (nie wystarczy sam PDF).
                </p>
            </div>
        )
    },
    {
        question: "Kiedy muszę przerejestrować auto? Jak długo Polak może legalnie jeździć samochodem na polskich tablicach w Hiszpanii?",
        answer: "Jeśli jesteś turystą lub przebywasz w Hiszpanii tymczasowo, możesz jeździć samochodem na polskich numerach rejestracyjnych maksymalnie 6 miesięcy w ciągu roku (nie muszą być to miesiące ciągłe). Jeśli jednak zameldowałeś się lub uzyskałeś stały pobyt w Hiszpanii, masz obowiązek przerejestrować auto w ciągu 30 dni od uzyskania rezydencji."
    }
]

export default function FaqSection() {
    return (
        <section id="kontakt" className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
                        Często zadawane pytania
                    </h2>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-left font-medium text-lg">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
