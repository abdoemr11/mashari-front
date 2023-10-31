import type { Metadata } from "next";
import { Amiri } from "next/font/google";
import "./globals.css";

const amiri = Amiri({ subsets: ["arabic"], weight: ["400", "700"] });

export const metadata: Metadata = {
    title: "مشاريع",
    description: "مشاريع للعربية",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" dir="rtl">
            <body className={amiri.className}>{children}</body>
        </html>
    );
}
