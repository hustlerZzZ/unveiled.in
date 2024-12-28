import "./globals.css";
import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import Footer from "@/components/essentitals/footer";
import Navbar from "@/components/essentitals/navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";

const josefin = Josefin_Sans({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Authify - Protect your website's in seconds",
    description:
        "Authify delivers robust authentication functionality and pre-built authentication components, making secure and seamless user management effortless for developers.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${josefin.className} grid grid-rows-[auto_1fr_auto] h-screen antialiased dark:bg-zinc-800 dark:text-white`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <Navbar />
                    {children}
                    {/* <Footer /> */}
                </ThemeProvider>
            </body>
        </html>
    );
}
