import AppLayout from "@/components/layout";
import { authenticate } from "@/services/userService";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await authenticate();
  return (
    <html lang="th">
      <body>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
