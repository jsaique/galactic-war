import { Roboto } from "next/font/google";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "900"],
});

export const metadata = {
  title: "Super Earth Ministry of Truth",
  description: "Unofficial Helldivers 2 Galactic War status page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
