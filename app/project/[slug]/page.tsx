import { getOneProject } from "@/app/libs/project";
import Markdown from "react-markdown";
export const dynamic = "force-dynamic"; //TODO remove this line on production

export default async function Page({ params }: { params: { slug: string } }) {
    const project: Project = await getOneProject(params.slug);
    console.log(project);

    return (
        <main className=" prose-sm sm:prose container  px-16 mt-16">
            <h2>
                {project.title}
                <Markdown>{project.description}</Markdown>
            </h2>
        </main>
    );
}
