// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="relative min-h-screen font-sans overflow-hidden bg-black text-white">
       

        {/* Page Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}

