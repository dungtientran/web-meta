'use client';
import Container from '../Container/Container';

interface SectionProps {
    title: string;
    children: React.ReactNode;
    backgroundUrl: string;
    id: string
}

const Section: React.FC<SectionProps> = ({ children, title, backgroundUrl, id }) => {
    return (
            <section
                id={id}
                style={{
                    backgroundImage: `url(${backgroundUrl})`
                }}
                className={`bg-center bg-cover bg-no-repeat h-[1080px] py-[163px]`}
            >
                <h2 className="text-center font-[500] text-[48px] leading-[56px] text-white">
                    {title}
                </h2>
                <div className="mt-[163px]">
                    <Container >
                        {children}
                    </Container>
                </div>
            </section>
    )
}

export default Section
