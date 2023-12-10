import Image from "next/image";
import Markdown from "react-markdown";
import Card from "./components/Card";
import { getAllBooks, searchBook } from "./libs/book";
import SearchBar from "./components/SearchBar";
import Heading from "./components/Heading";
import { submitSearch } from "@/app/actions";
import { getThumbnailUrl } from "./libs/utils";

export default async function Home({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    console.log(searchParams.query);
    let books: Book[];
    if (typeof searchParams.query === "string") {
        books = await searchBook(searchParams.query);
    } else {
        books = await getAllBooks();
    }

    if (!books) return <div>hi</div>;
    return (
        <main>
            <SearchBar submitSearch={submitSearch} />

            <Heading headingText="كتبا مميزة" />
            <section className=" grid sm:grid-cols-2 md:grid-cols-3 mx-auto  gap-4 mt-8 w-full">
                {books.map((book) => (
                    <Card
                        slug={book.slug}
                        thumbnail={getThumbnailUrl(book)}
                        key={book.slug}
                        title={book.title}
                        summary={book.summary}
                    />
                ))}
            </section>
        </main>
    );
}
