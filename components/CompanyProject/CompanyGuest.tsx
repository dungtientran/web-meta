import Image from 'next/image';
import React from 'react';

const list = [
    {
        src: '/icons/be.svg'
    },
    {
        src: '/icons/t.svg'
    },
    {
        src: '/icons/android.svg'
    },
    {
        src: '/icons/window.svg'
    },
    {
        src: '/icons/tiktoc.svg'
    },
    {
        src: '/icons/chrome.svg'
    },
]

const CompanyGuest = () => {
    return (
        <div className='w-[1724px] mx-auto h-[258px] flex flex-col items-center justify-between mt-[163px]'>
            <p className='text-center font-[500] text-[32px] leading-[38px] text-white'>
                Khách hàng của chúng tôi
            </p>
            <div className='flex flex-row items-center justify-between w-full'>
                {list?.map((icon, i) => (
                    <div key={i} className='w-[139px] h-[139px] flex items-center justify-center'>
                        <Image
                            alt='company guest'
                            src={icon?.src}
                            width={0}
                            height={0}
                            className='w-auto'
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CompanyGuest
