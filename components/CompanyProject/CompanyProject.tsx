"use client";

import CompanyProjectCard from "./CompanyProjectCard";


const list = [
    {
        src: '/icons/users.svg',
        title: 'Khách hàng',
        count: '100+'
    },
    {
        src: '/icons/bag.svg',
        title: 'Dự án',
        count: '200+'
    },
    {
        src: '/icons/earth.svg',
        title: 'Quốc gia',
        count: '5+'
    },
    {
        src: '/icons/medal.svg',
        title: 'Sự hài lòng',
        count: '88%'
    },
]

const CompanyProject = () => {
    return (
        <div className="flex flex-row items-center justify-between w-[1274px] mx-auto">
        {list?.map((project, i) => (
            <CompanyProjectCard
                key={i}
                count={project?.count}
                src={project?.src}
                title={project?.title}
            />
        ))}
      </div>
    )
}

export default CompanyProject
