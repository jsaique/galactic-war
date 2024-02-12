import { Jost } from "next/font/google";
import "./globals.css";

const inter = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Institute of Galactic War For Super Earth",
  description: "Unofficial Helldivers 2 Galactic War status page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
