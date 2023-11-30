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
        <form className=" p-4 sm:p-16 " onSubmit={handleSearch}>
            <div className=" relative">
                <input
                    type="text"
                    placeholder="ما الكتاب الذي تبحث عنه"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setError(false);
                    }}
                    className={`border border-primary rounded-3xl py-4   px-6 focus:outline-none  w-full flex-1 font-cairo ${
                        error && "border-[#f00]"
                    } `}
                    required
                />
                <button
                    type="submit"
                    className=" absolute bg-primary text-secondary font-semibold rounded-3xl left-0 py-[10px] px-4 text-2xl"
                >
                    بحث
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
