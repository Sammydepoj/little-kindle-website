import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";

const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Little kindles Africa",
  description: "Igniting the Spark of Education for Africa's Children",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>
        {" "}
        <NextTopLoader
          color="#001F3F"
          initialPosition={0.08}
          crawlSpeed={200}
          height={4}
          crawl={true}
          easing="ease"
          speed={100}
          showSpinner={false}
        />
        {children}
      </body>
    </html>
  );
}
