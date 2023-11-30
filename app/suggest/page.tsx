import Heading from "../components/Heading";
import SuggestionForm from "./SuggestionForm";

export default function Page() {
    return (
        <main className=" container px-4 sm:px-16  w-full">
            <Heading headingText="ساعدنا في تكبير المكتبة" />
            <div className="py-4">هلم هلمو هلمو</div>
            <SuggestionForm />
        </main>
    );
}
