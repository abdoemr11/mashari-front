import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-center mt-24 text-2xl md:text-4xl">
            <h2>هناك خطأ ما</h2>
            <p className="text-accent md:text-3xl">لم نعثر علي ما تريد</p>
        </div>
    );
}
