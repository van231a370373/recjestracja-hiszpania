import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicyPage() {
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
                <h1 className="text-4xl font-bold font-headline mb-8">Política de Privacidad / Polityka prywatności</h1>
                <div className="max-w-none space-y-6 text-muted-foreground">
                    <section>
                        <h2 className="text-2xl font-bold font-headline text-foreground mb-4">1. Responsable del tratamiento / Administrator danych</h2>
                        <p className="mb-4">
                            Polska Grupa Konsultingowa S.L., con CIF B22682827 y domicilio social en Calle Matilde Peñaranda 27 – 5 A, 03183 Torrevieja (Alicante), España, es la responsable del tratamiento de los datos personales recogidos a través de este Sitio Web. Para cualquier consulta relativa al tratamiento de sus datos, puede dirigir un escrito al correo electrónico Info@rejestracjahiszpania.com.
                        </p>
                        <p className="italic">
                            Administratorem danych osobowych zebranych za pośrednictwem niniejszego Serwisu jest Polska Grupa Konsultingowa S.L., numer CIF B22682827, z siedzibą przy Calle Matilde Peñaranda 27 – 5 A, 03183 Torrevieja (Alicante), Hiszpania. Wszelkie pytania dotyczące przetwarzania danych można kierować na adres e-mail Info@rejestracjahiszpania.com.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline text-foreground mb-4">2. Normativa aplicable / Obowiązujące przepisy</h2>
                        <p className="mb-4">
                            El tratamiento de los datos personales se realiza conforme a lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 (Reglamento General de Protección de Datos), en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, así como en la Ley de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE).
                        </p>
                        <p className="italic">
                            Przetwarzanie danych osobowych odbywa się zgodnie z Rozporządzeniem (UE) 2016/679 Parlamentu Europejskiego i Rady z dnia 27 kwietnia 2016 r. (Ogólne rozporządzenie o ochronie danych – RODO), hiszpańską Ustawą organiczną 3/2018 z dnia 5 grudnia o ochronie danych osobowych i gwarancji praw cyfrowych, a także Ustawą o usługach społeczeństwa informacyjnego i handlu elektronicznym (LSSI-CE).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline text-foreground mb-4">3. Principios aplicados / Zasady przetwarzania danych</h2>
                        <p className="mb-4">
                            En el tratamiento de sus datos personales se aplican los siguientes principios: Licitud, lealtad y transparencia: los datos se tratan de manera lícita, leal y transparente. Limitación de la finalidad: los datos se recogen con fines determinados, explícitos y legítimos y no serán tratados posteriormente de manera incompatible con dichos fines. Minimización de datos: sólo se recogen los datos necesarios en relación con las finalidades para las que son tratados. Exactitud: se adoptan medidas para que los datos sean exactos y se mantengan actualizados. Integridad y confidencialidad: se garantiza la seguridad de los datos personales mediante medidas técnicas y organizativas adecuadas.
                        </p>
                        <p className="italic">
                            W przetwarzaniu danych osobowych stosuje się następujące zasady: 1. Zgodność z prawem, rzetelność i przejrzystość: dane są przetwarzane zgodnie z prawem, rzetelnie i w sposób przejrzysty. 2. Ograniczenie celu: dane są zbierane w określonych, wyraźnych i prawnie uzasadnionych celach i nie będą przetwarzane w sposób niezgodny z tymi celami. 3. Minimalizacja danych: zbierane są tylko dane niezbędne w związku z celami, dla których są przetwarzane. 4. Dokładność: podejmowane są środki zapewniające, że dane są dokładne i aktualizowane. 5. Integralność i poufność: zapewnione jest bezpieczeństwo danych osobowych poprzez odpowiednie środki techniczne i organizacyjne.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline text-foreground mb-4">4. Datos tratados y finalidad / Dane przetwarzane i cel</h2>
                        <p className="mb-4">
                            Los datos personales que se recogen a través del Sitio Web pueden incluir: nombre, apellidos, DNI/NIE o número de pasaporte, domicilio, correo electrónico, teléfono, datos de pago (para abonar los servicios), así como información técnica (dirección IP, navegador utilizado, etc.).
                            La finalidad del tratamiento de estos datos es: Gestionar la contratación de servicios de rematriculación y la relación comercial con el cliente. Tramitar pagos, facturación y envío de documentación relacionada con el proceso de rematriculación. Enviar información sobre el estado del expediente y notificaciones relacionadas con el servicio. Responder a consultas recibidas a través del formulario de contacto. Cumplir con las obligaciones legales y fiscales aplicables.
                        </p>
                        <p className="italic">
                            Dane osobowe zbierane za pośrednictwem Serwisu mogą obejmować: imię, nazwisko, numer DNI/NIE lub paszportu, adres zamieszkania, adres e‑mail, numer telefonu, dane płatności (w celu opłacenia usług), a także informacje techniczne (adres IP, używana przeglądarka itp.). Celem przetwarzania tych danych jest: Zarządzanie zawarciem umowy o usługę ponownej rejestracji i relacją handlową z klientem. Realizacja płatności, fakturowanie i przesyłanie dokumentacji związanej z procesem rejestracji. Wysyłanie informacji o stanie sprawy i powiadomień związanych z usługą. Odpowiadanie na zapytania otrzymane poprzez formularz kontaktowy. Spełnianie obowiązujących wymogów prawnych i podatkowych.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline text-foreground mb-4">5. Legitimación / Podstawa prawna</h2>
                        <p className="mb-4">
                            El tratamiento de sus datos se realiza en base a las siguientes legitimaciones: Ejecución de un contrato: para la prestación de los servicios solicitados. Cumplimiento de obligaciones legales: para cumplir con las obligaciones fiscales, mercantiles y administrativas. Consentimiento del interesado: para el envío de comunicaciones comerciales o la gestión de formularios de contacto.
                        </p>
                        <p className="italic">
                            Przetwarzanie danych odbywa się na następujących podstawach prawnych: Wykonanie umowy: w celu świadczenia żądanych usług. Wypełnienie obowiązków prawnych: w celu spełnienia obowiązków podatkowych, handlowych i administracyjnych. Zgoda osoby, której dane dotyczą: w celu wysyłania informacji handlowych lub obsługi formularzy kontaktowych.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline text-foreground mb-4">6. Conservación de los datos / Okres przechowywania danych</h2>
                        <p className="mb-4">
                            Sus datos se conservarán durante el tiempo necesario para cumplir con las finalidades para las que fueron recogidos y, posteriormente, durante los plazos legales de conservación y prescripción de responsabilidades. Una vez cumplidas las finalidades, los datos se bloquearán o anonimizarán conforme a la normativa vigente.
                        </p>
                        <p className="italic">
                            Dane będą przechowywane przez okres niezbędny do realizacji celów, dla których zostały zebrane, a następnie przez czas wymagany przepisami prawa i wynikający z terminów przedawnienia roszczeń. Po realizacji celów dane zostaną zablokowane lub zanonimizowane zgodnie z obowiązującymi przepisami.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline text-foreground mb-4">7. Destinatarios y transferencia internacional / Odbiorcy i transfery międzynarodowe</h2>
                        <p className="mb-4">
                            Sus datos podrán ser comunicados a terceros cuando sea necesario para la prestación del servicio (por ejemplo, gestorías, entidades financieras o administraciones públicas competentes). Asimismo, podrán existir transferencias internacionales de datos cuando el proveedor de servicios esté ubicado fuera del Espacio Económico Europeo; en estos casos, se adoptarán las garantías adecuadas para proteger la información.
                        </p>
                        <p className="italic">
                            Twoje dane mogą być przekazywane osobom trzecim, gdy jest to konieczne do świadczenia usługi (na przykład biurom księgowym, instytucjom finansowym lub właściwym organom administracji publicznej). Mogą wystąpić międzynarodowe transfery danych, jeśli usługodawca znajduje się poza Europejskim Obszarem Gospodarczym; w takich przypadkach zostaną zastosowane odpowiednie zabezpieczenia w celu ochrony informacji.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline text-foreground mb-4">8. Derechos del usuario / Prawa użytkownika</h2>
                        <p className="mb-4">
                            Como usuario puede ejercer los siguientes derechos: Derecho de acceso: conocer qué datos personales tratamos. Derecho de rectificación: solicitar la modificación de datos inexactos. Derecho de supresión: pedir la eliminación de los datos cuando ya no sean necesarios. Derecho de oposición: oponerse al tratamiento de sus datos en determinadas circunstancias. Derecho a la limitación: solicitar que limitemos el tratamiento de sus datos. Derecho a la portabilidad: recibir sus datos en un formato estructurado y transferirlos a otro responsable.
                            Para ejercitar estos derechos, envíe una solicitud escrita acompañada de copia de su documento de identidad a Polska Grupa Konsultingowa S.L., Calle Matilde Peñaranda 27 – 5 A, 03183 Torrevieja (Alicante), España, o a través del correo Info@rejestracjahiszpania.com. Asimismo, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos o la autoridad competente en Polonia.
                        </p>
                        <p className="italic">
                            Jako użytkownik możesz skorzystać z następujących praw: Prawo dostępu: wiedzieć, jakie dane osobowe przetwarzamy. Prawo do sprostowania: żądać poprawienia nieprawidłowych danych. Prawo do usunięcia danych: żądać usunięcia danych, gdy nie są już potrzebne. Prawo sprzeciwu: sprzeciwić się przetwarzaniu danych w określonych sytuacjach. Prawo do ograniczenia przetwarzania: żądać ograniczenia przetwarzania danych. Prawo do przenoszenia danych: otrzymać dane w ustrukturyzowanym formacie i przenieść je do innego administratora.
                            Aby skorzystać z tych praw, prosimy wysłać pisemny wniosek wraz z kopią dokumentu tożsamości do Polska Grupa Konsultingowa S.L., Calle Matilde Peñaranda 27 – 5 A, 03183 Torrevieja (Alicante), Hiszpania, lub na adres e‑mail Info@rejestracjahiszpania.com. Masz również prawo wnieść skargę do Hiszpańskiej Agencji Ochrony Danych lub właściwego organu w Polsce.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline text-foreground mb-4">9. Menores de edad / Osoby niepełnoletnie</h2>
                        <p className="mb-4">
                            No se recogen datos personales de menores de 14 años sin el consentimiento expreso de sus padres o tutores. Si detectamos que un menor de edad ha proporcionado datos personales sin la autorización correspondiente, procederemos a eliminar dicha información de nuestros sistemas.
                        </p>
                        <p className="italic">
                            Dane osobowe osób poniżej 14 roku życia nie są zbierane bez wyraźnej zgody ich rodziców lub opiekunów. Jeśli zostanie wykryte, że osoba niepełnoletnia przekazała dane osobowe bez stosownego upoważnienia, takie informacje zostaną usunięte z naszych systemów.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold font-headline text-foreground mb-4">10. Medidas de seguridad / Środki bezpieczeństwa</h2>
                        <p className="mb-4">
                            Polska Grupa Konsultingowa S.L. adopta las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida o acceso no autorizado, teniendo en cuenta el estado de la tecnología, la naturaleza de los datos almacenados y los riesgos a los que están expuestos.
                        </p>
                        <p className="italic">
                            Spółka Polska Grupa Konsultingowa S.L. stosuje niezbędne środki techniczne i organizacyjne, aby zapewnić bezpieczeństwo danych osobowych oraz zapobiec ich zmianie, utracie lub nieuprawnionemu dostępowi, biorąc pod uwagę stan techniki, charakter przechowywanych danych i zagrożenia, na jakie są narażone.
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
