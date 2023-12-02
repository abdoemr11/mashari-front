export function validateBook(data: unknown): data is Book {
    if (
        !(
            typeof data === "object" &&
            data !== null &&
            "id" in data &&
            "title" in data &&
            "publishedAt" in data &&
            "description" in data &&
            "summary" in data &&
            "book_url" in data &&
            "slug" in data &&
            "thumbnail" in data
        )
    ) {
        return false;
    }
    if (
        !(
            typeof data.id === "string" &&
            typeof data.title === "string" &&
            data.publishedAt instanceof Date &&
            typeof data.description === "string" &&
            typeof data.summary === "string" &&
            typeof data.book_url === "string" &&
            typeof data.slug === "string" &&
            typeof data.thumbnail === "string"
        )
    ) {
        return false;
    }
    return true;
}
