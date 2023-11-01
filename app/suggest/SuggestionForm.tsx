"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { sumbitProject } from "../libs/project";
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
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        sumbitProject({
            title: data.title,
            description: data.description,
            mail: data.mail,
        });
        reset();
        setSuccess(true);
    };
    const [isSuccess, setSuccess] = useState(false);
    console.log(errors);
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid text-lg gap-y-2"
        >
            <label htmlFor="title">عنوان المشروع</label>
            <input
                className="border py-2 px-4"
                type="text"
                placeholder="title"
                {...register("title", { required: true })}
            />
            <label htmlFor="description" className="mt-4">
                وصف المشروع
            </label>

            <textarea
                className="w-full h-[300px] border py-2 px-4"
                {...register("description", { required: true })}
            />
            <label htmlFor="mail" className="mt-4">
                بريدك الإلكتروني للتواصل
            </label>

            <input
                className="border py-2 px-4"
                type="email"
                placeholder="mail"
                {...register("mail", { required: true })}
            />

            <input
                type="submit"
                value={"أرسل المشروع"}
                className="ml-auto mt-4 bg-slate-900 p-4 text-white cursor-pointer"
            />
            {isSuccess && "لقد أرسلت المشروع المقترح شكرا لك"}
        </form>
    );
}
