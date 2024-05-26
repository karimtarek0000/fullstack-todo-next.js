import { ThemeProvider } from "@/app/provider/ThemeProvider";
import DialogControl from "@/context/DialogControl";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Todo app",
  description: "Create your todos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <DialogControl>{children}</DialogControl>
            <Toaster
              toastOptions={{ duration: 3000 }}
              position="top-right"
              reverseOrder={false}
            />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
