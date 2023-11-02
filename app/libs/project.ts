const API_BASE_URL = process.env.API_BASE_URL;

const authHeaders = {
    Authorization: `bearer ${process.env.API_TOKEN}`,
};
async function handleResponse(res: Response) {
    if (!res.ok) {
        console.log(res.status);
        throw new Error("Failed to fetch data" + res.body);
    }
    return res.json();
}

export async function getAllProjects(): Promise<Project[]> {
    const res = await fetch(`${API_BASE_URL}projects?populate=*`, {
        headers: authHeaders,
    });
    const rawProjects = await handleResponse(res);
    return rawProjects.data.map((rp: any) => rp.attributes);
}

export async function getOneProject(slug: string): Promise<Project> {
    const res = await fetch(`${API_BASE_URL}projects/${slug}`, {
        headers: authHeaders,
    });
    const rawProject = await handleResponse(res);
    return rawProject.data.attributes;
}
interface SuggestedProject {
    title: string;
    description: string;
    mail?: string;
}
export async function sumbitProject({
    title,
    description,
    mail,
}: SuggestedProject) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}suggestions/`,
        {
            method: "POST", // or 'PUT'
            body: JSON.stringify({
                data: { title, description, suggestion_mail: mail },
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: `bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            },
        }
    );
    await handleResponse(res);
}

export async function searchProject(query: string): Promise<Project[]> {
    const res = await fetch(
        `${API_BASE_URL}projects?filters[$or][0][title][$containsi]=${query}&filters[$or][1][description][$containsi]=${query}`,
        {
            headers: authHeaders,
        }
    );
    const rawProjects = await handleResponse(res);
    return rawProjects.data.map((rp: any) => rp.attributes);
}
