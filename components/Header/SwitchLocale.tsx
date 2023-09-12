"use client";
import {useCallback} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


const SwitchLocale = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()!
   
    const createQueryString = useCallback(
      (value: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('lang', value)
        router.push(pathname + '?' + params.toString())
      },
      [pathname, router, searchParams]
    )
   
    return (
        <div>
            <Select onValueChange={(e) => createQueryString(e)}>
                <SelectTrigger
                    className=" focus:border-none border-none text-white focus:ring-0 focus:ring-offset-0 w-[77px] whitespace-nowrap"
                >
                    <SelectValue placeholder="English" />
                </SelectTrigger>
                <SelectContent className="w-auto border-none bg-black text-white text-[16px] font-bold">
                    <SelectGroup>
                        <SelectItem value="en" className="font-semibold">English</SelectItem>
                        <SelectItem value="vi-VN" className="font-semibold">Việt Nam</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SwitchLocale
