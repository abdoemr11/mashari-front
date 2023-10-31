// Card.tsx

import Image from "next/image";
import TempImage from "@/app/assets/300.png";
const Card = () => {
    return (
        <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4">
            <Image
                className="w-full h-56 object-cover object-center"
                src={TempImage}
                alt="card"
                width={300}
                height={300}
            />
            <div className="py-4 px-6">
                <h2 className="text-xl font-semibold mb-2">Card Title</h2>
                <p className="text-gray-600 text-sm">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings
                </p>
            </div>
            <div className="flex items-center justify-between px-6 py-4 bg-gray-200">
                <p className="text-gray-700 font-bold">$24.99</p>
                <button className="px-3 py-1 bg-gray-600 text-sm text-white rounded">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Card;
