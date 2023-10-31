export async function getAllProjects(): Promise<Project[]> {
    const res = await fetch("http://127.0.0.1:1337/api/projects", {
        headers: {
            Authorization:
                "bearer 0ac066538b54259682ce381d02adf272de8cd7cab33ebf0098146b130c9d08504372a721c53c2b86ce8ef5835e6534d5e6a017346221c05e0de5d949c49fb3ba722d21b6b2b478f1f1109fb603bf6b9606996e780bef4a976a31bcfac0fb2e15a2b25e27779e822a29327ebd1f3bf1a1769799c7304a4c6b5f686062bb9a4373",
        },
    });
    if (!res.ok) {
        console.log(res.status);
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }
    const rawProjects = (await res.json()).data;
    const projects = rawProjects.map((rp: any) => rp.attributes);
    console.log(projects);
    return projects;
}

export async function getOneProject(slug: string): Promise<Project> {
    const res = await fetch("http://127.0.0.1:1337/api/projects/" + slug, {
        headers: {
            Authorization:
                "bearer 0ac066538b54259682ce381d02adf272de8cd7cab33ebf0098146b130c9d08504372a721c53c2b86ce8ef5835e6534d5e6a017346221c05e0de5d949c49fb3ba722d21b6b2b478f1f1109fb603bf6b9606996e780bef4a976a31bcfac0fb2e15a2b25e27779e822a29327ebd1f3bf1a1769799c7304a4c6b5f686062bb9a4373",
        },
    });
    if (!res.ok) {
        console.log(res.status);
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }
    const rawProject = (await res.json()).data;
    const project = rawProject.attributes;
    return project;
}
