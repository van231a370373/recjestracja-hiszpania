"use client";

import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

interface StepCardProps {
    index: number;
    step: string;
    title: string;
    icon: React.ReactNode;
    frontContent: string[];
    backContent: React.ReactNode;
    gradient: string;
}

export function StepCard({ index, step, title, icon, frontContent, backContent, gradient }: StepCardProps) {
    return (
        <div className="group perspective-1000 animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
            <div className={cn("relative preserve-3d w-full h-80 rounded-xl shadow-lg transition-transform duration-700 group-hover:rotate-y-180 group-hover:scale-105")}>
                {/* Front Side */}
                <div className={cn("absolute backface-hidden w-full h-full p-6 flex flex-col items-center justify-center text-center text-white rounded-xl bg-gradient-to-br", gradient)}>
                    <div className="mb-4">{icon}</div>
                    <p className="font-semibold text-lg opacity-80">{step}</p>
                    <h3 className="text-2xl font-bold font-headline mb-4">{title}</h3>
                    <ul className="space-y-2 text-sm text-left inline-block">
                        {frontContent.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                                <Check className="w-4 h-4 text-green-300 shrink-0 mt-1" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Back Side */}
                <div className="absolute rotate-y-180 backface-hidden w-full h-full bg-card rounded-xl p-6 flex flex-col items-center justify-center text-center">
                    <h4 className="font-bold font-headline text-lg text-primary mb-2">{title}</h4>
                    <p className="text-sm text-muted-foreground">
                        {backContent}
                    </p>
                </div>
            </div>
        </div>
    );
}
