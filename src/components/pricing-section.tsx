import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle2 } from 'lucide-react';

export default function PricingSection() {
    const fixedCosts = [
        { name: "Tasa DGT", price: "99,77€" },
        { name: "Colegio Gestores", price: "11,80€" },
        { name: "Nasze honorarium", price: "250€ + IVA" },
    ];
    
    const variableCosts = [
        "Impuesto Matriculación (0-14,75% wartości)",
        "IVTM gminny (~50-200€/rok)",
        "ITP przy zakupie od osoby prywatnej (4-8%)",
    ];

    return (
        <section id="cennik" className="py-20 md:py-32 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
                        Przejrzyste ceny - płacisz raz, masz spokój
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Brak ukrytych opłat. Zawsze wiesz, za co płacisz.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle>Koszty Stałe</CardTitle>
                            <CardDescription>Opłaty, które są zawsze takie same.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {fixedCosts.map(cost => (
                                    <li key={cost.name} className="flex justify-between items-center">
                                        <span className="text-muted-foreground">{cost.name}</span>
                                        <span className="font-semibold text-foreground">{cost.price}</span>
                                    </li>
                                ))}
                            </ul>
                            <Separator className="my-6" />
                            <div className="flex justify-between items-center font-bold text-lg">
                                <span>RAZEM (orientacyjnie):</span>
                                <span>~414€</span>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="shadow-lg">
                        <CardHeader>
                            <CardTitle>Koszty Zmienne</CardTitle>
                            <CardDescription>Obliczamy je dla Ciebie indywidualnie.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {variableCosts.map(cost => (
                                    <li key={cost} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                        <span>{cost}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
