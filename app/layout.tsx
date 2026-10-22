import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Víctor Suárez | Cybersecurity & Systems Engineer',
  description:
    'Portfolio de Víctor Suárez: ciberseguridad, Active Directory, OSINT e infraestructura self-hosted.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
