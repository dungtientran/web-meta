"use client";

import Image from "next/image";

interface CompanyServiceCardProps {
    title: string,
    src: string,
    description: string
}

const CompanyServiceCard: React.FC<CompanyServiceCardProps> = ({ description, src, title }) => {
    return (
        <div className="h-[132px] flex flex-col items-center justify-between">
            <div className="h-[50px] w-full overflow-hidden flex items-center justify-center">
                <Image
                    alt={title}
                    src={src}
                    width='78'
                    height='50'
                />
            </div>
            <p className="text-[25px] text-white font-bold leading-[30px]">
                {title}
            </p>
            <p className="text-white text-center text-[17px] font-[300] leading-[20px]">
                {description}
            </p>
        </div>
    )
}

export default CompanyServiceCard
