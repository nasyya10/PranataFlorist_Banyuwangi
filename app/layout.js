import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from './lib/registry';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pranata Florist - Elegant Flowers for Every Occasion",
  description: "Discover beautiful, fresh flowers and arrangements at Pranata Florist. Perfect for weddings, events, and special moments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
