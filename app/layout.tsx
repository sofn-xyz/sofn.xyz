import "./globals.css";

export const metadata = {
  title: "Sofn Inc",
  description: "Software for the future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
