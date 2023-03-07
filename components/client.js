import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import "swiper/css";

const Client = () => {
    const [clients, setClients] = useState([]);
    useEffect(() => {
        const getApi = async () => {
            const response = await fetch(
                "https://a-design-kamilmuhammad.vercel.app//api/hello"
            );
            const data = await response.json();
            setClients(data);
        };
        getApi();
    }, []);

    return (
        <div className="lg:grid lg:grid-cols-3">
            <div className="col-span-2">
                {" "}
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: true }}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                    }}
                    scrollbar={{ draggable: false }}
                >
                    {clients.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="flex flex-col md:flex-row p-10">
                                <Image
                                    src={item.src}
                                    width={200}
                                    height={200}
                                    alt={item.src}
                                    className="w-[300px] h-[300px] rounded-full rounded-tr-none shadow-2xl"
                                />
                                <div className="flex-col justify-center flex lg:px-10 py-4 md:py-0 gap-5">
                                    <h1 className="text-2xl font-semibold">
                                        {item.name}
                                    </h1>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="hidden lg:block lg:relative mr-20">
                <Image
                    src="/client/client1.jpg"
                    width={60}
                    height={60}
                    alt="client1"
                    className="rounded-full h-20 w-20 absolute left-20 top-16"
                />
                <Image
                    src="/client/client2.jpg"
                    width={60}
                    height={60}
                    alt="client2"
                    className="rounded-full h-16 w-16 absolute top-1/2 left-16"
                />
                <Image
                    src="/client/client3.jpg"
                    width={60}
                    height={60}
                    alt="client3"
                    className="rounded-full h-28 w-28 absolute left-36 top-40"
                />
                <Image
                    src="/client/client4.jpg"
                    width={60}
                    height={60}
                    alt="client4"
                    className="rounded-full h-24 w-24 absolute right-10 top-16"
                />
                <Image
                    src="/client/client5.jpg"
                    width={60}
                    height={60}
                    alt="client5"
                    className="rounded-full h-20 w-20 absolute right-0 bottom-16"
                />
                <Image
                    src="/client/client6.jpg"
                    width={60}
                    height={60}
                    alt="client6"
                    className="rounded-full h-16 w-16 absolute bottom-10 left-28"
                />
            </div>
            <div className="col-span-1"></div>
        </div>
    );
};

export default Client;
