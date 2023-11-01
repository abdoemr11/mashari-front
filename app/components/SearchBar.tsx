"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = ({ submitSearch }: { submitSearch: (v: string) => void }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();
    const handleSearch = (e: any) => {
        e.preventDefault();
        console.log(searchTerm);
        if (searchTerm === "") {
            router.push(`/`);
            return;
        }
        router.push(`/?query=${searchTerm}`);
    };

    return (
        <form className="flex items-center p-16" onSubmit={handleSearch}>
            <input
                type="text"
                placeholder="ما المشروع الذي تبحث عنه"
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setError(false);
                }}
                className={`border border-gray-300 rounded-l py-2 px-3 focus:outline-none flex-1 ${
                    error && "border-[#f00]"
                } `}
                required
            />
            <button
                type="submit"
                className="bg-blue-500 text-white font-semibold rounded-l px-4 py-2  basis-[10%]"
            >
                ابحث
            </button>
        </form>
    );
};

export default SearchBar;
