"use client";

import Container from "@/components/Container/Container";

import Logo from "./Logo";
import Nav from "./Nav";
import GroupBtn from "./GroupBtn";

const Header = () => {
    return (
        <header className="fixed w-screen z-10 ">
            <Container>
                <div className="py-[20px] flex flex-row items-center justify-between">
                    <Logo />
                    <Nav />
                    <GroupBtn />
                </div>
            </Container>
        </header>
    )
}

export default Header
