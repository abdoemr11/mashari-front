import BackButton from "@/app/components/BackButton";
import Heading from "@/app/components/Heading";
import { getOneBook } from "@/app/libs/book";
import Image from "next/image";
import dummyImage from "@/app/assets/300.png";
import { getThumbnailUrl } from "@/app/libs/utils";
import parse from "html-react-parser";

export default async function Page() {
    return (
        <main className=" mx-auto container mt-12  w-full">
            <BackButton />
            <Heading headingText={"هدفنا"} />
            <div className="text-lg md:w-4/5 space-y-4">
                <p>
                    كانَ أبي يعملُ مدرسا في المملكةِ العربيةِ السعوديةِ حينَ
                    كنتَ طفلاً صغيرا، وكانَ محبا للكتبِ واقتنائها وكانَ مما أتى
                    بهِ هوَ كتابٌ للحاسوبِ كانَ يدرسُ في المرحلةِ المتوسطةِ
                    وقتئذٍ. أثارَ هذا الكتابِ فضولي وفتح عيناي على عالمٍ رهيبٍ.
                    ومنذُ ذلكَ الوقتِ وأنا في هذا العالم أنهلُ منه ويغمرني.{" "}
                </p>
                <p>
                    هذهِ قصتي، وأعتقدُ أنها قصة الكثيرينَ مثلي. والموضوعُ طويلٌ؛
                    أرجو أنْ تكونَ هذهِ لبنةٌ في بناءِ التقنيةِ العربيةِ{" "}
                </p>
                <p>إنني أرجو من كل محب للعربية أن ينضم إلينا </p>
                <p>
                    رجاء تواصلوا معي علي هذا الحساب abbdelrahmansaber@gmail.com
                </p>
                <p></p>
                <a
                    href="https://github.com/abdoemr11/wraqelhasob"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-blue-600"
                >
                    وهذا رابط مستودع المشروع
                </a>
                <p>والله الموفق والمستعان</p>
            </div>
        </main>
    );
}
