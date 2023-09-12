"use client";

import Image from "next/image";

interface CompanyProjectCardProps {
    title: string;
    src: string;
    count: string
}

const CompanyProjectCard: React.FC<CompanyProjectCardProps> = ({ count, src, title }) => {
    return (
        <div className="flex flex-row items-center gap-[20px] ">
            <div className="w-[119px] h-[84px] overflow-hidden flex items-center justify-end">
                <Image
                    alt={title}
                    src={src}
                    width={0}
                    height={0}
                    className="w-auto"
                />
            </div>
            <div className="flex flex-col items-center justify-between">
                <p className="text-white font-[500] text-[48px] tracking-[2%] leading-[58px]">
                    {count}
                </p>
                <p className="text-white font-[500] text-[24px] tracking-[2%] leading-[29px] text-center whitespace-nowrap">
                    {title}
                </p>
            </div>
        </div>
    )
}

export default CompanyProjectCard
