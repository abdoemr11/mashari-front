"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { sumbitSuggestedBook } from "../libs/book";
import { title } from "process";
import { useState } from "react";
interface Inputs {
    title: string;
    description: string;
    mail: string;
}
export default function SuggestionForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            await sumbitSuggestedBook({
                title: data.title,
                description: data.description,
                mail: data.mail,
            });
            reset();
            setSuccess(true);
        } catch (error) {
            console.log("There is an error");
        }
    };
    const [isSuccess, setSuccess] = useState(false);
    console.log(errors);
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid text-lg gap-y-2 grid-cols-1 font-cairo "
        >
            <label htmlFor="title">اسم الكتاب</label>
            <input
                className="border py-2 px-4 rounded-xl border-secondary"
                type="text"
                placeholder="title"
                {...register("title", { required: true })}
            />
            <label htmlFor="description" className="mt-4">
                ماالذي تريد اخبارنا عنه{" "}
            </label>

            <textarea
                className="w-full h-[300px] border py-2 px-4 rounded-xl border-secondary"
                {...register("description", { required: true })}
            />
            <label htmlFor="mail" className="mt-4">
                بريدك الإلكتروني للتواصل
            </label>

            <input
                className="border py-2 px-4 rounded-xl border-secondary"
                type="email"
                placeholder="mail"
                {...register("mail", { required: true })}
            />

            <input
                type="submit"
                value={"أرسل المشروع"}
                className="ml-auto mt-4 text-primary p-4 bg-secondary rounded-xl cursor-pointer"
            />
            {isSuccess && "لقد أرسلت المشروع المقترح شكرا لك"}
        </form>
    );
}
