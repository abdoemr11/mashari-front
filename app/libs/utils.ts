export function getThumbnailUrl(book: Book) {
    return `${process.env.NEXT_PUBLIC_PB_URL}/api/files/books/${book.id}/${book.thumbnail}`;
}
