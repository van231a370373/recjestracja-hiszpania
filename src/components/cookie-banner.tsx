"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { X } from 'lucide-react';

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
        // Load analytics if needed
        // initializeAnalytics();
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50 p-4 animate-in slide-in-from-bottom-full duration-500">
            <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex-1 text-sm text-gray-700 dark:text-gray-300">
                    Ta strona używa cookies do poprawy doświadczenia użytkownika i analizy ruchu.
                    Al continuar navegando, aceptas nuestra{' '}
                    <a href="/polityka-cookies" className="text-primary underline hover:no-underline">
                        Polityka Cookies
                    </a>.
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={handleReject}
                    >
                        Odrzuć
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        asChild
                    >
                        <a href="/polityka-cookies">Konfiguruj</a>
                    </Button>
                    <Button
                        size="sm"
                        onClick={handleAccept}
                    >
                        Zaakceptuj
                    </Button>
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-2 right-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}