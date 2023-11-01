import Image from "next/image";
import Markdown from "react-markdown";
import Card from "./components/Card";
import { getAllProjects, searchProject } from "./libs/project";
import SearchBar from "./components/SearchBar";
import { submitSearch } from "./actions";

export const dynamic = "force-dynamic"; //TODO remove this line on production
export default async function Home({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    console.log(searchParams.query);
    let projects: Project[];
    if (typeof searchParams.query === "string") {
        projects = await searchProject(searchParams.query);
    } else {
        projects = await getAllProjects();
    }

    if (!projects) return <div>hi</div>;
    return (
        <main>
            <SearchBar submitSearch={submitSearch} />
            <section className=" grid sm:grid-cols-2 md:grid-cols-3 mx-auto  gap-4 mt-16 w-full">
                {projects.map((project) => (
                    <Card
                        slug={project.slug}
                        thumbnail={project.thumbnail}
                        key={project.slug}
                        title={project.title}
                        summary={project.summary}
                    />
                ))}
            </section>
        </main>
    );
}
