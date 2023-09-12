import CompanyServiceCard from "./CompanyServiceCard"

const list = [
    {
        title: 'Đội ngũ',
        src: '/images/team.jpg',
        description: 'Hơn 10 năm kinh nghiệm'
    },
    {
        title: 'Công nghệ',
        src: '/images/technology.jpg',
        description: 'Sử dụng công nghệ tiên tiến'
    },
    {
        title: 'Quy trình',
        src: '/images/procedure.jpg',
        description: 'Làm việc chuyên nghiệp'
    },
    {
        title: 'Ý tưởng',
        src: '/images/idea.jpg',
        description: 'Thiết kế sáng tạo'
    },
]

const ListCompanyService = () => {
    return (
        <div className="w-[1242px] mx-auto flex flex-row items-center justify-between mt-[100px]">
            {list?.map((service, i) => (
                <CompanyServiceCard
                    key={i}
                    title={service?.title}
                    src={service?.src}
                    description={service?.description}
                />
            ))}
        </div>
    )
}

export default ListCompanyService
