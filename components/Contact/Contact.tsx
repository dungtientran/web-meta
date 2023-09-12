"use client";

import Container from '../Container/Container';
import FormContact from './FormContact';

const Contact = () => {
    return (
        <div className='bg-black' id='#contact'>
            <Container>
                <div className='py-[109px] flex flex-row items-center justify-between h-[1080px] '>
                    <div className="w-1/2 h-full bg-[url('/images/background_contact.jpg')] bg-no-repeat bg-center" />
                    <FormContact />
                </div>
            </Container>
        </div>
    )
}

export default Contact
