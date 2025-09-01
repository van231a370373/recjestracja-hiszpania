export default function ReturnPolicy() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-20">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Política de Devoluciones y Derecho de Desistimiento / Polityka zwrotów i prawo odstąpienia</h1>
            <div className="space-y-8 text-muted-foreground">
                <section>
                    <h2 className="text-2xl font-bold font-headline text-foreground mb-4">1. Derecho de desistimiento / Prawo odstąpienia</h2>
                    <p className="mb-4">
                        De conformidad con la legislación de protección al consumidor, el cliente tiene derecho a desistir del contrato en un plazo de 14 días naturales desde la formalización del servicio, sin necesidad de justificación, siempre que el servicio no se haya ejecutado por completo. Para ejercer este derecho, debe enviar una notificación inequívoca a través del correo Info@rejestracjahiszpania.com indicando su nombre, dirección y la referencia del servicio contratado.
                    </p>
                    <p className="italic">
                        Zgodnie z przepisami o ochronie konsumentów, klient ma prawo odstąpić od umowy w ciągu 14 dni kalendarzowych od zawarcia umowy, bez podania przyczyny, pod warunkiem że usługa nie została w pełni wykonana. Aby skorzystać z tego prawa, należy przesłać jednoznaczne oświadczenie na adres Info@rejestracjahiszpania.com, podając swoje imię, nazwisko, adres i numer referencyjny usługi.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-headline text-foreground mb-4">2. Procedimiento de devolución / Procedura zwrotu</h2>
                    <p className="mb-4">
                        Si el cliente ejerce su derecho de desistimiento dentro del plazo establecido y el servicio no ha comenzado, Polska Grupa Konsultingowa S.L. reembolsará íntegramente el importe abonado. El reembolso se efectuará en un plazo de 14 días naturales utilizando el mismo medio de pago empleado por el cliente, salvo que este disponga expresamente lo contrario.
                        En aquellos casos en los que el servicio ya hubiera comenzado a prestarse a petición expresa del cliente antes de la finalización del periodo de desistimiento, se descontará del importe a reembolsar la parte proporcional correspondiente al servicio ya prestado.
                    </p>
                    <p className="italic">
                        Jeżeli klient skorzysta z prawa odstąpienia w wyznaczonym terminie, a usługa nie została rozpoczęta, spółka Polska Grupa Konsultingowa S.L. zwróci w całości zapłaconą kwotę. Zwrot zostanie dokonany w ciągu 14 dni kalendarzowych tym samym środkiem płatności, chyba że klient wyraźnie postanowi inaczej.
                        W przypadkach, gdy świadczenie usługi rozpoczęło się na wyraźne żądanie klienta przed upływem okresu odstąpienia, od zwracanej kwoty zostanie odliczona proporcjonalna część odpowiadająca wykonanej już usłudze.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-headline text-foreground mb-4">3. Excepciones al derecho de desistimiento / Wyłączenia prawa odstąpienia</h2>
                    <p className="mb-4">
                        El derecho de desistimiento no será aplicable cuando el servicio haya sido completamente ejecutado y el cliente hubiera consentido expresamente el inicio de la prestación antes de finalizar el plazo de desistimiento, reconociendo que una vez ejecutado el servicio pierde su derecho a desistir. Tampoco procederá cuando el servicio se refiera a actividades personalizadas solicitadas por el cliente que requieran trámites específicos ante la administración pública.
                    </p>
                    <p className="italic">
                        Prawo odstąpienia nie będzie miało zastosowania, gdy usługa została w pełni wykonana, a klient wyraził wyraźną zgodę na rozpoczęcie jej realizacji przed zakończeniem okresu odstąpienia, przyjmując do wiadomości, że po wykonaniu usługi traci prawo do odstąpienia. Nie będzie ono przysługiwać również wtedy, gdy usługa dotyczy spersonalizowanych czynności wymaganych przez klienta, które wymagają konkretnych formalności przed organami administracyjnymi.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold font-headline text-foreground mb-4">4. Garantías / Gwarancje</h2>
                    <p className="mb-4">
                        Polska Grupa Konsultingowa S.L. se compromete a prestar el servicio contratado con la máxima diligencia y profesionalidad. En el caso de que surgiera algún defecto o error imputable a la empresa en la gestión de la rematriculación, el cliente tendrá derecho a exigir la subsanación del mismo sin coste adicional o, en su defecto, la devolución proporcional de las cantidades pagadas.
                    </p>
                    <p className="italic">
                        Spółka Polska Grupa Konsultingowa S.L. zobowiązuje się świadczyć zamówioną usługę z najwyższą starannością i profesjonalizmem. W przypadku wystąpienia wad lub błędów przypisywanych spółce w ramach obsługi rejestracji klient ma prawo żądać ich usunięcia bez dodatkowych kosztów lub, ewentualnie, proporcjonalnego zwrotu zapłaconych kwot.
                    </p>
                </section>

                <p className="text-sm text-muted-foreground mt-12">
                    Última actualización: {new Date().toLocaleDateString('es-ES')}.
                </p>
            </div>
        </div>
    );
}