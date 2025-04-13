import { Inter, } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "Mulish",
  subsets: ["latin"],
});

export const metadata = {
  title: "SKC:Youth Hub",
  description: "By ANQUERO's",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
