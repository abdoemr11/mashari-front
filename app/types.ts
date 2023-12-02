interface Project {
    title: string;
    publishedAt: Date;
    description: string;
    summary: string;
    slug: string;
    thumbnail: any;
}

interface Book {
    id: string;
    title: string;
    publishedAt: Date;
    description: string;
    summary: string;
    book_url: string;
    slug: string;

    thumbnail: string;
}
interface SuggestedBook {
    title: string;
    description: string;
    mail: string;
}
