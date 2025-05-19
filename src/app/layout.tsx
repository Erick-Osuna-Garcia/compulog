import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} bg-gray-900 min-h-screen`}>
        <div className="flex flex-col min-h-screen">
          <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 shadow">
            <h1 className="text-3xl font-bold tracking-tight"> Dashboard</h1>
          </header>
          <main className="flex-grow p-6 bg-gray-900">{children}</main>
          <footer className="bg-gray-800 text-gray-200 p-4 text-center text-sm">
            <span>uwu &copy; {new Date().getFullYear()} - Powered by Next.js & Tailwind CSS</span>
          </footer>
        </div>
      </body>
    </html>
  );
}