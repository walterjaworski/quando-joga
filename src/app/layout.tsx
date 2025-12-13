import { Header } from './components/layout/Header';
import './globals.css';

export const metadata = {
  title: 'Quando Joga',
  description: 'Jogos e classificação do Athlético',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
