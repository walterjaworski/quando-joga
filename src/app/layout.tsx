import './globals.css';

export const metadata = {
  title: 'Quando Joga',
  description: 'Jogos, classificação e informações do Athlético',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
