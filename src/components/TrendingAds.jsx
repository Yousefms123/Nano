import React from "react";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import ImgCarousel from "../assets/imgCarousel.png";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Trending from "../assets/trending-img.png";
import Box from "../assets/box.svg";
import Calendar from "../assets/calendar.svg";
import Clock from "../assets/clock.svg";
import Location from "../assets/location.svg";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, LocateFixed } from "lucide-react";
import { useRef } from "react";
import MainButton from "./Button";
const TrendingAds = () => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	return (
		<div className="mt-20">
			<h1 className="font-Tajawal text-3xl md:text-4xl  font-bold ">اعلانات رائجة</h1>
			<div className="relative py-8 font-Tajawal">
				{/* سهم يسار */}
				<button
					className=" absolute left-2 top-1/2 z-20 -translate-y-1/2 bg-white shadow rounded-full p-2"
					aria-label="Previous"
					ref={nextRef}
				>
					<ChevronLeft className="text-main-color" />
				</button>

				{/* سهم يمين */}
				<button
					className=" absolute right-2 top-1/2 z-20 -translate-y-1/2 bg-white shadow rounded-full p-2"
					aria-label="Next"
					ref={prevRef}
				>
					<ChevronRight className="text-main-color" />
				</button>

				<Swiper
					modules={[Navigation]}
					slidesPerView={3}
					spaceBetween={30}
					pagination={{ clickable: true }}
					navigation={{
						prevEl: prevRef.current,
						nextEl: nextRef.current,
					}}
					onBeforeInit={(swiper) => {
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.params.navigation.nextEl = nextRef.current;
					}}
					breakpoints={{
						320: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					className="py-6"
				>
					{Array.from({ length: 9 }).map((_, idx) => (
						<SwiperSlide
							key={idx}
							// className="flex-shrink-0"
							style={{ width: "370px" }} // تتحكم في العرض عشان يطلع الجزء من الجوانب
						>
							<div className="relative h-[70vh] px-4 md:p-0 rounded-2xl  shadow-xl ">
								<div
									style={{ backgroundImage: `url(${Trending})` }}
									className="rounded-2xl h-[100%] bg-cover bg-center lg:px-14 py-8  flex flex-col justify-between   p-6 text-white"
								>
									<div>
										<h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-2 lg:mb-4">
											دورة البذرة المباركة
										</h3>
										<p className="text-sm my-6">
											انضم إلينا في دورة البذرة المباركة، المصممة خصيصًا
											للمبتدئين الراغبين في بدء مشوارهم في حفظ القرآن الكريم
											بطريقة منهجية، مشوقة، ومحفزة.
										</p>
									</div>
									<div className="flex items-center justify-between text-xs">
										<div className="flex flex-col items-center gap-2">
											<img width={"24px"} src={Box} alt="" />
											<span>مبتدئين</span>
										</div>
										<div className="flex flex-col items-center gap-2">
											<img width={"24px"} src={Location} alt="" />
											<span>مبنى المركز</span>
										</div>
										<div className="flex flex-col items-center gap-2">
											<img width={"24px"} src={Clock} alt="" />
											<span>4 اسابيع</span>
										</div>
										<div className="flex flex-col items-center gap-2">
											<img width={"24px"} src={Calendar} alt="" />
											<span>5 Aug, 2025</span>
										</div>
									</div>
									<div className="flex items-center gap-x-4">
										<LocateFixed size={35} />
										<span className="text-sm my-6 text-start">
											هدفنا هو غرس حب القرآن، وتعويد النفس على الحفظ
											والمراجعة المنتظمة
										</span>
									</div>
									<div className="">
										<MainButton
											to={"/register"}
											className="bg-button rounded-full px-12 py-2 text-lg font-Tajawal font-medium"
										>
											احجز مقعدك الآن
										</MainButton>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default TrendingAds;
