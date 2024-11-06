import type { Metadata } from "next";

import { PrimeReactProvider } from 'primereact/api';
import Layout from "app/components/Layout/Layout";

import "primereact/resources/themes/lara-light-blue/theme.css";
import 'primeicons/primeicons.css';
import "app/styles/layout/layout.scss";

export const metadata: Metadata = {
  title: "PanGourmet",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <PrimeReactProvider>
      <html lang="en">
        <body>
          <Layout>
            {children}
          </Layout>
        </body>
      </html>
    </PrimeReactProvider>
  );
}
