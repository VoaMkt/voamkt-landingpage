// 1. Importa os estilos globais (onde o Tailwind está)
import './globals.css'; 
import { Inter } from 'next/font/google';

// Define a fonte principal (opcional, mas boa prática)
const inter = Inter({ subsets: ['latin'] });

// Metadados para SEO e o navegador
export const metadata = {
  title: 'FILTRA | Clientes Prontos para Fechar',
  description: 'Assessoria que entrega clientes pré-qualificados e agendados.',
};

// O componente de layout que envolve todas as páginas
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* Aqui é onde o seu page.tsx (o Hero) será injetado */}
        {children}
      </body>
    </html>
  );
}