"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  fullName: z.string().min(1, 'Pole jest wymagane.'),
  email: z.string().min(1, 'Pole jest wymagane.').email('Nieprawidłowy adres email.'),
  phone: z.string().min(1, 'Pole jest wymagane.').regex(/^\+?[0-9\s-()]+$/, 'Nieprawidłowy format telefonu.'),
  subject: z.string().min(1, 'Pole jest wymagane.'),
  message: z.string().min(10, 'Wiadomość musi mieć przynajmniej 10 znaków.'),
  privacyPolicy: z.boolean().refine(value => value === true, {
    message: "Musisz zaakceptować politykę prywatności.",
  }),
});

type ContactValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      privacyPolicy: false,
    },
  });

  const onSubmit = async (data: ContactValues) => {
    setIsSubmitting(true);
    try {
      // Here you could send to an API or email service
      console.log('Contact form data:', data);
      toast({
        title: "Wiadomość wysłana!",
        description: "Dziękujemy za kontakt. Odpowiemy wkrótce.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Błąd wysyłania",
        description: "Spróbuj ponownie później.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold font-headline text-foreground">
          Kontakt
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Skontaktuj się z nami. Odpowiemy w ciągu 24 godzin.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Imię i nazwisko *</FormLabel>
                  <FormControl>
                    <Input placeholder="Jan Kowalski" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input placeholder="email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numer telefonu *</FormLabel>
                  <FormControl>
                    <Input placeholder="+48 123 456 789" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Temat wiadomości *</FormLabel>
                  <FormControl>
                    <Input placeholder="Temat" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Wiadomość *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Twoja wiadomość..."
                    rows={6}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="privacyPolicy"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    Akceptuję{' '}
                    <Link
                      href="/polityka-prywatnosci"
                      className="text-primary underline hover:no-underline"
                    >
                      politykę prywatności
                    </Link>
                    . *
                  </FormLabel>
                  <p className="text-xs text-muted-foreground mt-2">
                    <span className="font-semibold">Campos obligatorios:</span> nombre y apellidos, dirección de correo electrónico, número de teléfono, asunto y mensaje. <span className="font-semibold">Pola obowiązkowe:</span> imię i nazwisko, adres e‑mail, numer telefonu, temat i treść wiadomości.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="font-semibold">Finalidad del tratamiento:</span> los datos proporcionados serán tratados por Polska Grupa Konsultingowa S.L. con la finalidad de responder a la solicitud planteada y que no serán cedidos a terceros salvo obligación legal. <span className="font-semibold">Cel przetwarzania:</span> dane przekazane będą przetwarzane przez Polska Grupa Konsultingowa S.L. w celu udzielenia odpowiedzi na zgłoszenie i że nie będą przekazywane osobom trzecim, chyba że wymagają tego przepisy prawa.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    <span className="font-semibold">Medidas de seguridad:</span> informamos de que se han adoptado medidas de seguridad técnicas y organizativas para garantizar la confidencialidad y protección de los datos personales. <span className="font-semibold">Środki bezpieczeństwa:</span> informacja, że w celu zapewnienia poufności i ochrony danych osobowych zostały przyjęte odpowiednie środki techniczne i organizacyjne.*
                  </p>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

         <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
           {isSubmitting ? 'Wysyłanie...' : 'Wyślij wiadomość'}
         </Button>
        </form>
      </Form>

      <div className="mt-12 p-6 bg-muted/50 rounded-lg">
        <h3 className="font-semibold mb-2">Informacje kontaktowe:</h3>
        <div className="space-y-2 text-sm">
          <p>📧 <strong>Email:</strong> Info@rejestracjahiszpania.com</p>
          <p>📞 <strong>Teléfono:</strong> +34 684 793 797</p>
          <p>🕒 <strong>Horarios:</strong> Lunes a Viernes, 9:00 - 18:00 CET</p>
        </div>
      </div>
    </div>
  );
}