import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
            <div className="text-center space-y-6 max-w-md mx-auto px-4">
                <div className="text-8xl font-bold text-muted-foreground">404</div>
                <h1 className="text-2xl font-bold">Strona nie została znaleziona</h1>
                <p className="text-muted-foreground">
                    Przepraszamy, strona którą próbujesz odwiedzić nie istnieje lub została przeniesiona.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                    Wróć do strony głównej
                </Link>
            </div>
        </div>
    );
}