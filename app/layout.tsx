import './globals.css';
import Navbar from './components/layout/Navbar';

export const metadata = {
  title: 'DrB & Co - Global Excellence',
  description: 'Luxury travel and world-class logistics solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}