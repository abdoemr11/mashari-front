import BackButton from "@/app/components/BackButton";
import Heading from "@/app/components/Heading";
import { getOneBook } from "@/app/libs/book";
import Image from "next/image";
import dummyImage from "@/app/assets/300.png";
import { getThumbnailUrl } from "@/app/libs/utils";
import parse from "html-react-parser";

export default async function Page({ params }: { params: { slug: string } }) {
    const book: Book = await getOneBook(params.slug);

    return (
        <main className=" mx-auto container mt-12  w-full">
            <BackButton />
            <Heading headingText={book.title} />
            <Image
                width={300}
                height={300}
                src={getThumbnailUrl(book)}
                alt="غلاف الكتاب"
            />
            <div className="prose-sm  sm:prose mt-4 sm:mt-8">
                {parse(book.description)}
            </div>
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={book.book_url}
                className="  bg-primary text-secondary font-semibold rounded-3xl 
            left-0 py-[10px] px-4 text-2xl cursor-pointer mt-8  block w-fit mx-auto "
            >
                الحصول علي الكتاب
            </a>
        </main>
    );
}
