"use client";
import Image from 'next/image';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton, InstapaperShareButton } from 'react-share';

const SocialBtn = () => {

    return (
        <div className='flex flex-row items-center justify-between gap-[20px]'>
            <FacebookShareButton
                url={`gooogle.com`}
            >
                <Image
                    alt='fb'
                    src='/icons/fa.svg'
                    width='24'
                    height='24'
                />
            </FacebookShareButton>
            <TwitterShareButton
                url={`gooogle.com`}
            >
                <Image
                    alt='fb'
                    src='/icons/twitter.svg'
                    width='24'
                    height='24'
                />
            </TwitterShareButton>
            <InstapaperShareButton
                url={`gooogle.com`}

            >
                <Image
                    alt='fb'
                    src='/icons/instagram.svg'
                    width='24'
                    height='24'
                />
            </InstapaperShareButton>
        </div>
    )
}

export default SocialBtn
