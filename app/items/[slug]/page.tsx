import BackButton from "@/app/components/BackButton";
import Heading from "@/app/components/Heading";
import { getOneProject } from "@/app/libs/book";
import Image from "next/image";
import dummyImage from "@/app/assets/300.png";
import Markdown from "react-markdown";

export const dynamic = "force-dynamic"; //TODO remove this line on production

export default async function Page({ params }: { params: { slug: string } }) {
    const project: Project = await getOneProject(params.slug);

    return (
        <main className=" mx-auto container mt-12  w-full">
            <BackButton />
            <Heading headingText={project.title} />
            <Image
                width={300}
                height={300}
                src={dummyImage}
                alt="غلاف الكتاب"
            />
            <div className="prose-sm  sm:prose mt-4 sm:mt-8">
                <Markdown className="font-cairo">
                    {project.description}
                </Markdown>
            </div>
            <a
                className="  bg-primary text-secondary font-semibold rounded-3xl 
            left-0 py-[10px] px-4 text-2xl cursor-pointer mt-8  block w-fit mx-auto "
            >
                الحصول علي الكتاب
            </a>
        </main>
    );
}
