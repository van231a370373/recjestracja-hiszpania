import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative bg-gray-900 text-white overflow-hidden">
            <div className="absolute inset-0 animated-gradient opacity-90"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 text-sm">
                    {/* Columna 1: Información de la empresa */}
                    <div className="text-center xl:text-left">
                        <h3 className="text-lg font-bold font-headline text-white mb-4">RejestracjaHiszpania.com</h3>
                        <div className="space-y-2 text-white/90">
                            <p className="text-sm"><strong>CIF:</strong> B22682827</p>
                            <p className="text-sm">
                                Calle Matilde Peñaranda, 27<br />
                                03183 Torrevieja (Alicante), España
                            </p>
                        </div>
                    </div>

                    {/* Columna 2: Contacto urgente */}
                    <div className="text-center xl:text-left">
                        <h4 className="font-semibold text-white mb-4">Pilny Kontakt</h4>
                        <div className="space-y-3">
                            <a href="mailto:Info@rejestracjahiszpania.com"
                               className="flex items-center justify-center xl:justify-start gap-2 text-white/90 hover:text-white transition-colors text-sm">
                                <span>📧</span> Info@rejestracjahiszpania.com
                            </a>
                            <a href="tel:+34684793797"
                               className="flex items-center justify-center xl:justify-start gap-2 text-white/90 hover:text-white transition-colors text-sm">
                                <span>📞</span> +34 684 793 797
                            </a>
                        </div>
                    </div>

                    {/* Columna 3: Información legal */}
                    <div className="text-center xl:text-left">
                        <h4 className="font-semibold text-white mb-4">Informacje Prawne</h4>
                        <div className="space-y-1">
                            <div className="grid grid-cols-1 gap-1 text-xs">
                                <Link href="/nota-prawna" className="text-white/80 hover:text-white transition-colors">Nota Prawna / Aviso Legal</Link>
                                <Link href="/polityka-prywatnosci" className="text-white/80 hover:text-white transition-colors">Polityka Prywatności / Política de Privacidad</Link>
                                <Link href="/warunki-ogolne" className="text-white/80 hover:text-white transition-colors">Warunki Ogólne / Condiciones</Link>
                                <Link href="/polityka-cookies" className="text-white/80 hover:text-white transition-colors">Polityka Cookies / Política de Cookies</Link>
                                <Link href="/polityka-zwrotow" className="text-white/80 hover:text-white transition-colors">Polityka Zwrotów / Política de Devoluciones</Link>
                                <Link href="/rodo" className="text-white/80 hover:text-white transition-colors">RODO / RGPD</Link>
                                <Link href="/kontakt" className="text-white/80 hover:text-white transition-colors">Kontakt / Contacto</Link>
                            </div>
                        </div>
                    </div>

                    {/* Columna 4: Información importante */}
                    <div className="text-center xl:text-left">
                        <h4 className="font-semibold text-white mb-4">Informacja prawna</h4>
                        <p className="text-xs text-white/70 leading-relaxed">
                            Treści na stronie mają charakter wyłącznie informacyjny dotyczący usług rejestracji pojazdów w Hiszpanii. Administrator nie odpowiada za skutki decyzji podjętych na ich podstawie. Wszelkie materiały chronione prawem autorskim.
                        </p>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/20 text-center text-xs text-white/60">
                    <p>© {new Date().getFullYear()} Polska Grupa Konsultingowa SL. Wszelkie prawa zastrzeżone.</p>
                </div>
            </div>
        </footer>
    );
}
