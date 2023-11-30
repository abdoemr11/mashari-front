"use client";
import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();
    return (
        <span
            className="px-3 py-1  text-xl  rounded mr-auto block w-fit font-bold cursor-pointer bg-accent"
            onClick={() => {
                router.back();
            }}
        >
            عودة
        </span>
    );
}
