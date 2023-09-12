"use client";

import ListServiceItem from "./ListServiceItem";

const list = [
    {
        title: "Tư vấn giải pháp",
        image: "/images/service_1.jpg",
        description: "Tư vấn, áp dụng các giải pháp công nghệ dành cho cá nhân/ doanh nghiệp nhằm tối ưu quy trình kinh doanh."
    },
    {
        title: "Lập trình website",
        image: "/images/service_2.jpg",
        description: "Kho giao diện đa dạng, lập trình ứng dụng đáp ứng hiệu suất, tối ưu hoá trải nghiệm người dùng."
    },
    {
        title: "Phát triển ứng dụng di động",
        image: "/images/service_3.jpg",
        description: "Lập trình ứng dụng di động đa nền tảng iOS và Android, đáp ứng tốc độ, phù hợp với phần lớn thiết bị có mặt trên thị trường."
    },
    {
        title: "Dịch vụ máy chủ website",
        image: "/images/service_4.jpg",
        description: "Máy chủ bảo mật cao, tư vấn lựa chọn máy chủ phù hợp từng giai đoạn, phù hợp chi phí đầu tư ban đầu, khả năng nâng cấp linh hoạt."
    },
]

const ListService = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      {list?.map((service, i) => (
        <ListServiceItem 
            key={i}
            title={service?.title}
            src={service?.image}
            description={service?.description}
        />
      ))}
    </div>
  )
}

export default ListService
