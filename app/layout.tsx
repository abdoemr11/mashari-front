import type { Metadata } from "next";
import { Amiri } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
            <body className={amiri.className}>
                <header className="flex justify-between mx-auto p-4 container">
                    <Link className="prose" href={"/"}>
                        <h1>مشاريع</h1>
                    </Link>
                    <Link className="text-2xl" href={"/suggest"}>
                        اقترح مشروعا
                    </Link>
                </header>
                {children}
            </body>
        </html>
    );
}
