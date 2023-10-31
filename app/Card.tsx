// Card.tsx

import Image from "next/image";
import TempImage from "@/app/assets/300.png";
import Link from "next/link";
type ICardProps = {
    thumbnail: string;
    title: string;
    summary: string;
    slug: string;
};
const Card = ({ thumbnail, title, summary, slug }: ICardProps) => {
    console.log(slug);

    return (
        <div className="prose max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
            <Image
                className="w-full h-56 object-cover object-center"
                src={thumbnail && TempImage}
                alt="card"
                width={300}
                height={300}
            />
            <div className=" py-4 px-6">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600 text-sm">{summary}</p>
            </div>
            <div className="flex items-center justify-between px-6 py-4 bg-gray-200">
                <p className="text-gray-700 font-bold">$24.99</p>
                <Link
                    href={slug ? "project/" + slug : "/"}
                    className="px-3 py-1 bg-gray-600 text-sm text-white rounded"
                >
                    المرزيد عن المشروع
                </Link>
            </div>
        </div>
    );
};

export default Card;
