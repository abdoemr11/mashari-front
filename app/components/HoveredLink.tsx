"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HoveredLink({
    target,
    displayText,
}: {
    target: string;
    displayText: string;
}) {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <Link
            href={target}
            className={`hover:bg-secondary hover:text-primary p-4 rounded ${
                target === pathname ? "bg-secondary text-primary" : ""
            } `}
        >
            {displayText}{" "}
        </Link>
    );
}
