import type { Metadata } from "next";
import { Amiri, Cairo } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import HoveredLink from "./components/HoveredLink";

const amiri = Amiri({ subsets: ["arabic"], weight: ["400", "700"] });
const cario = Cairo({
    subsets: ["arabic"],
    weight: ["400", "700"],
    variable: "--font-cairo",
});

export const metadata: Metadata = {
    title: "وراق الحاسوب",
    description: "المكتبة الجامعة لعلوم الحاسوب وغيرها من المجالات التقنية",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" dir="rtl">
            <body
                className={
                    amiri.className +
                    " " +
                    cario.variable +
                    " p-6  sm:px-8 md:px-12 bg-background text-text"
                }
            >
                <header className=" flex  container  justify-center mx-auto p-4 ">
                    <Link className="" href={"/"}>
                        <Image
                            src={"/wraqLogo.png"}
                            alt="وراق الحاسوب"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto "
                        />
                    </Link>
                </header>
                <nav className="flex justify-center sm:gap-4 md:gap-8 text-2xl sm:text-3xl md:text-4xl lg:px-12">
                    <HoveredLink target="/suggest" displayText="اقترح كتابا" />

                    <HoveredLink target="/about" displayText="رؤيتنا" />
                </nav>
                {children}
            </body>
        </html>
    );
}
