"use client";
import SwitchLocale from "../Header/SwitchLocale";
import banner from "/images/banner_image.jpg";



const Banner = () => {

    return (
        <div
            className="bg-[url('/images/banner_image.jpg')] w-full h-[1080px] bg-center bg-no-repeat bg-cover flex items-center justify-center relative"
        // className="bg-black w-full h-screen pt-[500px]"
        >
            <div className=" w-[1124px] mx-auto h-[456px] flex flex-col justify-between absolute top-[292px]">
                <h1 className="font-[500] text-[64px] text-white text-center leading-[100px] px-[50px]">
                    GIẢI PHÁP TỐI ƯU DÀNH CHO MỌI DOANH NGHIỆP
                </h1>
                <p className="text-white font-[400] text-[24px] leading-[32px] text-center">
                    Chúng tôi cung cấp và tư vấn các giải pháp lập trình ứng dụng website, ứng dụng di động dành cho doanh nghiệp của bạn.
                    Cùng với việc áp dụng các xu hướng công nghệ mới và các gói máy chủ linh hoạt chúng tôi đem đến cho bạn giải pháp tối ưu nhất cho doanh nghiệp của bạn.
                </p>
                <div className="flex items-center justify-center">
                    <button
                        type="button"
                        onClick={() => {}}
                        className="px-[16px] py-[12px] bg-white text-black rounded-[99px] border-none w-[270px] text-center font-[400] text-[20px] leading-[28px] uppercase
                        hover:bg-zinc-600 hover:text-white transition"
                    >
                        Tư vấn miễn phí
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner
