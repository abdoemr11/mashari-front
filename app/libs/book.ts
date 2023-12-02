import PocketBase, { AdminAuthResponse } from "pocketbase";

const pb = new PocketBase("https://wraqelhasob.pockethost.io");

/**
 * To avoid auto cancellation or unneccessary authentication attempts
 */
let authData: AdminAuthResponse;
async function authenticateAdmin() {
    if (!authData) {
        authData = await pb.admins.authWithPassword(
            process.env.NEXT_PUBLIC_PB_AUTHMAIL as string,
            process.env.NEXT_PUBLIC_PB_AUTHPASSWORD as string
        );
    }
}
/**
 * TODO deal with pagination
 * TODO data validation
 */
export async function getAllBooks(): Promise<Book[]> {
    await authenticateAdmin();

    const records = await pb.collection<Book>("books").getFullList({
        sort: "-created",
    });
    const books: Book[] = records;
    console.log(books);
    return books;
}

export async function getOneBook(slug: string): Promise<Book> {
    await authenticateAdmin();
    const record = await pb
        .collection("books")
        .getFirstListItem<Book>(`slug="${slug}"`);
    console.log("trying to get one book", record);
    return record;
}

export async function searchBook(query: string): Promise<Book[]> {
    await authenticateAdmin();
    const records = await pb.collection("books").getFullList<Book>({
        sort: "-created",
        filter: `title ~ '${query}' || description ~ '${query}'`,
    });
    return records;
}

export async function sumbitSuggestedBook({
    title,
    description,
    mail,
}: SuggestedBook) {
    await authenticateAdmin();
    const record = await pb
        .collection("suggested_books")
        .create({ title, description, mail });
}
