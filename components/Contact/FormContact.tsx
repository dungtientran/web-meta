"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
    Form, FormControl, FormField, FormItem, FormLabel, FormMessage,

} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";


const formSchema = z.object({
    name: z.string().min(1, {
        message: "name is required."
    }),
    email: z.string().min(1, {
        message: "email is required."
    }),
    phone: z.string().min(1, {
        message: "phone is required."
    }),
    description: z.string(),
});

const FormContact = () => {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            description: ""
        }
    });
    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log("asdadadas", values);
    }

    return (
        <div className='w-1/2 flex items-start justify-center'>
            <div className="w-[600px]  flex flex-col justify-between gap-[20px]">
                <h2 className=" text-white text-[64px] font-[500] leading-[77px]">
                    Liên hệ tư vấn
                </h2>
                <p className="font-[500] text-[16px] leading-[28px] text-[#A1A5B7]">
                    Vui lòng điền thông tin để được tư vấn hoàn toàn miễn phí
                </p>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1 space-y-[50px]">
                        <div className="space-y-[10px]">

                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                className="bg-black border h-[60px] border-[#FFFFFF33] text-[16px] font-[400] leading-[28px] text-white focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[rgba(244, 246, 252, 1)] px-[16px] py-[12px] rounded-[10px]"
                                                placeholder="Tên của bạn"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-[10px]" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                className="bg-black border h-[60px] border-[#FFFFFF33] text-[16px] font-[400] leading-[28px] text-white focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[rgba(244, 246, 252, 1)] px-[16px] py-[12px] rounded-[10px]"
                                                placeholder="Số điện thoại"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-[10px]" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                disabled={isLoading}
                                                className="bg-black border h-[60px] border-[#FFFFFF33] text-[16px] font-[400] leading-[28px] text-white focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[rgba(244, 246, 252, 1)] px-[16px] py-[12px] rounded-[10px]"
                                                placeholder="Email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-[10px]" />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                disabled={isLoading}
                                                className="bg-black h-[183px] border border-[#FFFFFF33] text-[16px] font-[400] leading-[28px] text-white focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-[rgba(244, 246, 252, 1)] px-[16px] py-[12px] rounded-[10px]"
                                                placeholder="Nhập nội dung"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-white text-black w-full mt-[50px] px-[51px] py-[15px] text-center rounded-[100px] text-[20px] leading-[32px] font-bold"
                        >
                            Gửi yêu cầu
                        </button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default FormContact
