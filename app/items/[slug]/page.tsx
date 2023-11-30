import BackButton from "@/app/components/BackButton";
import { getOneProject } from "@/app/libs/project";
import Link from "next/link";
import Markdown from "react-markdown";
export const dynamic = "force-dynamic"; //TODO remove this line on production

export default async function Page({ params }: { params: { slug: string } }) {
    const project: Project = await getOneProject(params.slug);

    return (
        <main className=" mx-auto container mt-12 border-t w-full">
            <BackButton />
            <h2 className="text-3xl sm:text-4xl md:text-5xl">
                {project.title}
            </h2>

            <div className="prose-sm  sm:prose mt-4 sm:mt-8">
                <Markdown>{project.description}</Markdown>
            </div>
        </main>
    );
}
