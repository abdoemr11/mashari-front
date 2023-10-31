import Image from "next/image";
import Markdown from "react-markdown";
import Card from "./Card";
import { getAllProjects } from "./libs/project";

export const dynamic = "force-dynamic"; //TODO remove this line on production
export default async function Home() {
    const projects: Project[] = await getAllProjects();
    console.log("The project are ", projects);
    if (!projects) return <div>hi</div>;
    return (
        <main className=" grid sm:grid-cols-2 md:grid-cols-3 mx-auto  gap-4 mt-16 w-full">
            {projects.map((project) => (
                <Card
                    slug={project.slug}
                    thumbnail={project.thumbnail}
                    key={project.slug}
                    title={project.title}
                    summary={project.summary}
                />
            ))}
        </main>
    );
}
