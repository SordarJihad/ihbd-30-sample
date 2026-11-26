import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Khata",
  description: "Log every Messenger order in ten seconds.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
