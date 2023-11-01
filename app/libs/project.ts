const API_BASE_URL = "http://127.0.0.1:1337/api/";

const gettHeaders = {
    Authorization:
        "bearer 0ac066538b54259682ce381d02adf272de8cd7cab33ebf0098146b130c9d08504372a721c53c2b86ce8ef5835e6534d5e6a017346221c05e0de5d949c49fb3ba722d21b6b2b478f1f1109fb603bf6b9606996e780bef4a976a31bcfac0fb2e15a2b25e27779e822a29327ebd1f3bf1a1769799c7304a4c6b5f686062bb9a4373",
};
const postHeaders = {
    Authorization:
        "bearer c0acbcca800646c8fa50e931413b532c147a9166567526a96e555fa7e3eb82db2ca8c9c8cdf605813e6cceac8f6a3baff16088da4a0df2141e8d1475c927d7d6afa8dca81e1e403ab789b81be959805c10807cea38adf004ef4fa28311b836cd83b2b72438662ef13dc9df2190bfdd9febbe15a3aa921991b89cd791534115eb",
};
async function handleResponse(res: Response) {
    if (!res.ok) {
        console.log(res.status);
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

export async function getAllProjects(): Promise<Project[]> {
    const res = await fetch(`${API_BASE_URL}projects`, {
        headers: gettHeaders,
    });
    const rawProjects = await handleResponse(res);
    return rawProjects.data.map((rp: any) => rp.attributes);
}

export async function getOneProject(slug: string): Promise<Project> {
    const res = await fetch(`${API_BASE_URL}projects/${slug}`, {
        headers: gettHeaders,
    });
    const rawProject = await handleResponse(res);
    return rawProject.data.attributes;
}
interface SuggestProject {
    title: string;
    description: string;
    mail?: string;
}
export async function sumbitProject({
    title,
    description,
    mail,
}: SuggestProject) {
    const res = await fetch(`${API_BASE_URL}suggestions/`, {
        method: "POST", // or 'PUT'
        body: JSON.stringify({
            data: { title, description, suggestion_mail: mail },
        }),
        headers: {
            "Content-Type": "application/json",
            ...postHeaders,
        },
    });
    await handleResponse(res);
}

export async function searchProject(query: string): Promise<Project[]> {
    const res = await fetch(
        `${API_BASE_URL}projects?filters[$or][0][title][$containsi]=${query}&filters[$or][1][description][$containsi]=${query}`,
        {
            headers: gettHeaders,
        }
    );
    const rawProjects = await handleResponse(res);
    return rawProjects.data.map((rp: any) => rp.attributes);
}
