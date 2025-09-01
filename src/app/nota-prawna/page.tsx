import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotaPrawnaPage() {
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
                <h1 className="text-4xl font-bold font-headline mb-8">Aviso Legal / Nota prawna</h1>
                <div className="max-w-none space-y-6 text-muted-foreground">
                    <section>
                        <h2 className="text-2xl font-bold font-headline text-foreground mb-4">1. Identificación y titularidad / Identyfikacja i własność</h2>
                        <p className="mb-4">
                            La página web RejestracjaHiszpania.com (en adelante, «el Sitio Web») es titularidad de Polska Grupa Konsultingowa S.L., sociedad inscrita en el Registro Mercantil de Alicante, con CIF B22682827 y domicilio social en Calle Matilde Peñaranda 27 – 5 A, 03183 Torrevieja (Alicante), España. Puede contactar con nosotros mediante el correo electrónico Info@rejestracjahiszpania.com o en el teléfono +34 684 793 797.
                        </p>
                        <p className="italic">
                            Strona internetowa RejestracjaHiszpania.com (dalej „Serwis") jest własnością spółki Polska Grupa Konsultingowa S.L., wpisanej do Rejestru Handlowego w Alicante, o numerze CIF B22682827 i siedzibie przy Calle Matilde Peñaranda 27 – 5 A, 03183 Torrevieja (Alicante), Hiszpania. Możesz skontaktować się z nami pod adresem Info@rejestracjahiszpania.com lub numerem telefonu +34 684 793 797.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline text-foreground mb-4">2. Objeto / Cel</h2>
                        <p className="mb-4">
                            El presente Aviso Legal regula el acceso, navegación y uso del Sitio Web, así como las responsabilidades derivadas de la utilización de sus contenidos. El Sitio Web ofrece información sobre los servicios de rematriculación de vehículos extranjeros en España, destinados a personas de nacionalidad polaca residentes en España.
                        </p>
                        <p className="italic">
                            Niniejsza nota prawna reguluje dostęp, przeglądanie i korzystanie z Serwisu oraz określa odpowiedzialność wynikającą z wykorzystania jego treści. Serwis dostarcza informacji o usługach ponownej rejestracji pojazdów z zagranicy w Hiszpanii, przeznaczonych dla osób narodowości polskiej mieszkających w Hiszpanii.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline text-foreground mb-4">3. Condiciones de uso / Warunki korzystania</h2>
                        <p className="mb-4">
                            El usuario se compromete a hacer un uso adecuado del Sitio Web y de los contenidos que en él se ofrecen, de conformidad con la ley, la moral y el orden público, así como con el presente Aviso Legal. Queda prohibido el uso del Sitio Web con fines ilícitos, lesivos de derechos o intereses de terceras personas o que de cualquier forma puedan dañar, inutilizar o sobrecargar el Sitio Web o impedir su normal funcionamiento.
                        </p>
                        <p className="italic">
                            Użytkownik zobowiązuje się do właściwego korzystania z Serwisu oraz udostępnianych w nim treści, zgodnie z prawem, dobrymi obyczajami i porządkiem publicznym, a także z niniejszą notą prawną. Zabrania się korzystania z Serwisu w celach nielegalnych, naruszających prawa lub interesy osób trzecich, a także w sposób, który może uszkodzić, wyłączyć lub przeciążyć Serwis albo uniemożliwić jego prawidłowe działanie.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline text-foreground mb-4">4. Propiedad intelectual e industrial / Własność intelektualna i przemysłowa</h2>
                        <p className="mb-4">
                            Todos los contenidos del Sitio Web (textos, gráficos, imágenes, logotipos, iconos, software, nombres comerciales, marcas, dibujos o cualquier otro signo susceptible de utilización industrial o comercial) están sujetos a derechos de propiedad intelectual e industrial y son titularidad de Polska Grupa Konsultingowa S.L. o de terceros que han autorizado su uso. Queda estrictamente prohibida la reproducción, distribución, comunicación pública o transformación de dichos contenidos sin la autorización expresa de los titulares de los derechos.
                        </p>
                        <p className="italic">
                            Wszystkie treści Serwisu (teksty, grafiki, obrazy, logotypy, ikony, oprogramowanie, nazwy handlowe, znaki towarowe, rysunki lub jakiekolwiek inne elementy mogące być przedmiotem wykorzystywania w przemyśle lub handlu) podlegają prawom własności intelektualnej i przemysłowej i są własnością Polska Grupa Konsultingowa S.L. lub osób trzecich, które udzieliły zgody na ich użycie. Ściśle zabrania się reprodukcji, dystrybucji, publicznego udostępniania lub przekształcania tych treści bez wyraźnej zgody właścicieli praw.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline text-foreground mb-4">5. Responsabilidades y garantías / Odpowiedzialność i gwarancje</h2>
                        <p className="mb-4">
                            El Sitio Web tiene carácter meramente informativo. Polska Grupa Konsultingowa S.L. no puede garantizar la ausencia absoluta de errores en el acceso al Sitio Web, en su contenido ni en su actualización, aunque se compromete a adoptar todas las medidas necesarias para evitarlos y subsanarlos a la mayor brevedad. La empresa no se hace responsable de las decisiones que puedan tomar los usuarios basadas en la información proporcionada, ni de los daños o perjuicios que se puedan derivar de la utilización del Sitio Web.
                        </p>
                        <p className="italic">
                            Serwis ma charakter wyłącznie informacyjny. Polska Grupa Konsultingowa S.L. nie gwarantuje całkowitego braku błędów w dostępie do Serwisu, w jego treści ani w jego aktualizacji, choć zobowiązuje się do podjęcia wszelkich niezbędnych środków w celu ich uniknięcia i jak najszybszego ich usunięcia. Spółka nie ponosi odpowiedzialności za decyzje podjęte przez użytkowników na podstawie udostępnionych informacji ani za szkody lub straty wynikające z korzystania z Serwisu.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline text-foreground mb-4">6. Política de enlaces / Polityka odsyłaczy</h2>
                        <p className="mb-4">
                            El Sitio Web puede contener vínculos o enlaces a otros sitios web gestionados por terceros, sobre los que Polska Grupa Konsultingowa S.L. no ejerce ningún tipo de control. La presencia de estos enlaces tiene finalidad meramente informativa y no implica la aceptación o aprobación de sus contenidos. La empresa declina cualquier responsabilidad por el uso o acceso a páginas externas.
                        </p>
                        <p className="italic">
                            Serwis może zawierać odnośniki lub linki do innych stron internetowych zarządzanych przez osoby trzecie, nad którymi Polska Grupa Konsultingowa S.L. nie sprawuje kontroli. Obecność tych linków ma wyłącznie charakter informacyjny i nie oznacza akceptacji lub zatwierdzenia ich treści. Spółka zrzeka się jakiejkolwiek odpowiedzialności za korzystanie lub dostęp do zewnętrznych stron.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline text-foreground mb-4">7. Protección de datos y privacidad / Ochrona danych i prywatność</h2>
                        <p className="mb-4">
                            La recopilación y el tratamiento de datos personales de los usuarios del Sitio Web se rige por lo establecido en la <Link href="/polityka-prywatnosci" className="text-primary underline hover:no-underline">Política de Privacidad</Link>. Al utilizar el Sitio Web, el usuario consiente el tratamiento de sus datos de acuerdo con las finalidades y condiciones descritas en la mencionada política.
                        </p>
                        <p className="italic">
                            Zbieranie i przetwarzanie danych osobowych użytkowników Serwisu podlega postanowieniom zawartym w <Link href="/polityka-prywatnosci" className="text-primary underline hover:no-underline">Polityce prywatności</Link>. Korzystając z Serwisu, użytkownik wyraża zgodę na przetwarzanie swoich danych zgodnie z celami i warunkami opisanymi w tej polityce.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline text-foreground mb-4">8. Legislación aplicable y jurisdicción / Prawo właściwe i jurysdykcja</h2>
                        <p className="mb-4">
                            El presente Aviso Legal se regirá e interpretará conforme a la legislación española. Para cualquier controversia que pudiera derivarse del acceso o uso del Sitio Web, las partes se someten a los tribunales competentes de la ciudad de Alicante, salvo que la normativa sobre protección de consumidores establezca un fuero distinto.
                        </p>
                        <p className="italic">
                            Niniejsza nota prawna podlega i będzie interpretowana zgodnie z prawem hiszpańskim. W przypadku jakichkolwiek sporów wynikających z dostępu lub korzystania z Serwisu strony poddają się jurysdykcji sądów w Alicante, chyba że przepisy o ochronie konsumentów stanowią inaczej.
                        </p>
                    </section>

                    <p className="text-sm text-muted-foreground mt-12">
                        Última actualización: {new Date().toLocaleDateString('es-ES')}.
                    </p>
                </div>
            </main>
        </div>
    );
}
