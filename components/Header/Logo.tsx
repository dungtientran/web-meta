"use client";
import Image from 'next/image';
import React from 'react';
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return (
        <Image
            alt="logo"
            src='/logo/logo.svg'
            width={198}
            height={42}
            onClick={() => router.push('/')}
            className='cursor-pointer'
        />
    )
}

export default Logo
