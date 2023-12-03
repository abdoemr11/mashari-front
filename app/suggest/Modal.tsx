// components/Modal.js
import { useState } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}
export default function Modal({ isOpen, onClose }: ModalProps) {
    const closeModal = () => {
        onClose();
    };

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div
                            className="fixed inset-0 transition-opacity"
                            onClick={closeModal}
                        >
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>{" "}
                        &#8203;
                        <div
                            className="inline-block align-bottom bg-primary rounded-lg text-left 
                        overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle 
                        sm:max-w-lg sm:w-full p-12 "
                        >
                            <main className="text-center">
                                <p className="text-3xl mb-3 md:mb-6 font-[inherit]">
                                    لقد تلقينا اقتراحك{" "}
                                </p>
                                <p className="text-2xl mb-8">جزاك الله خيرا </p>
                                <span
                                    className="px-4 py-3 text-base md:text-xl rounded  cursor-pointer bg-accent  "
                                    onClick={onClose}
                                >
                                    العودة
                                </span>
                            </main>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
