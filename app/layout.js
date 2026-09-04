import './globals.css';

export const metadata = {
  title: 'Rinse & Restore | Quotes',
  description: 'Exterior cleaning quotation workflow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  );
}
