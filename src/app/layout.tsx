import "./../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Agalya | Quant Research Portfolio",
  description: "Showcasing projects, articles, and tools in Quantitative Finance.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
