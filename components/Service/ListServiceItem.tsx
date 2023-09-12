"use client";

import Image from "next/image";

interface ListServiceItemProps {
    title: string;
    src: string;
    description: string;
}

const ListServiceItem: React.FC<ListServiceItemProps> = ({ description, src, title }) => {

    return (
        <div className="text-white h-[292px] w-[336px] flex flex-col items-center justify-between">
            <div className="w-[260px] h-[140px] overflow-hidden">
                <Image
                    alt={title}
                    src={src}
                    width="260"
                    height="140"
                />
            </div>
            <p className="text-[24px] font-bold leading-[40px]">
                {title}
            </p>
            <p className="text-[16px] text-center leading-[24px] font-[400]">
                {description}
            </p>
        </div>
    )


}




export default ListServiceItem
