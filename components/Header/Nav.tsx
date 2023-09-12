"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
// import Link from 'next/link';

import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const list = [
    {
        name: 'Trang chủ',
        path: '#home',
    },
    {
        name: 'Về chúng tôi',
        path: '#us',
    },
    {
        name: 'Kho giao diện',
        path: '#layouts',
    },
    {
        name: 'Đội ngũ',
        path: '#team',
    },
    {
        name: 'Liên hệ',
        path: '#contact',
    },
]

const Nav = () => {
    const params = useSearchParams();
    return (
        <nav>
            <ul className='list-none flex flex-row items-center justify-between gap w-[660px]'>
                {
                    list?.map((listName, i) => (
                        <li
                            key={i}
                        >
                            <Link
                                activeClass="bg-[linear-gradient(92.11deg,_#586AC9_1.1%,_#569CDC_46.77%,_#799EB4_70.63%,_#BD9F70_98.54%)] bg-clip-text text-transparent font-bold text-[16px]"
                                to={listName?.path}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={500}
                                className='text-white duration-300 cursor-pointer text-[16px] font-bold'
                            >
                                {/* <p
                                    // className={`${seleted === listName?.path ? 'bg-[linear-gradient(92.11deg,_#586AC9_1.1%,_#569CDC_46.77%,_#799EB4_70.63%,_#BD9F70_98.54%)] bg-clip-text text-transparent font-bold ' : 'text-white'} transition-all duration-500`}

                                >
                                    {listName?.name}
                                </p> */}
                                    {listName?.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Nav
