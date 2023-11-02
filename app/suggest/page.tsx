import SuggestionForm from "./SuggestionForm";

export default function Page() {
    return (
        <main className="prose container px-4 sm:px-16 mt-16 w-full">
            <h2>اقترح مشروعا جديدا</h2>
            <SuggestionForm />
        </main>
    );
}
