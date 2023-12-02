"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();
    return (
        <span
            className="px-4 py-3  text-xl md:text-3xl rounded mr-auto block w-fit font-bold cursor-pointer bg-accent"
            onClick={() => {
                router.back();
            }}
        >
            العودة
        </span>
    );
}
