import { Carousel, Typography, Button } from "@material-tailwind/react";
import ImgCarousel from "../assets/imgCarousel.png";
import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
export function CarouselWithContent() {
	const carouselData = [
		{
			id: 1,
			Image: ImgCarousel,
			title: "مركز السيت القرآني",
			feature: [
				"بيئة تربوية ايمانية محفزة",
				"برامج مخصصة لمختلف الاعمار",
				"كادر تعليمي مؤهل وذو خبرة",
				"ربط الطلاب بالسلوك الاسلامي",
			],
		},
		{
			id: 2,
			Image: ImgCarousel,
			title: "مركز السيت القرآني",
			feature: [
				"بيئة تربوية ايمانية محفزة",
				"برامج مخصصة لمختلف الاعمار",
				"كادر تعليمي مؤهل وذو خبرة",
				"ربط الطلاب بالسلوك الاسلامي",
			],
		},
		{
			id: 3,
			Image: ImgCarousel,
			title: "مركز السيت القرآني",
			feature: [
				"بيئة تربوية ايمانية محفزة",
				"برامج مخصصة لمختلف الاعمار",
				"كادر تعليمي مؤهل وذو خبرة",
				"ربط الطلاب بالسلوك الاسلامي",
			],
		},
		// Add more carousel items here if needed
	];
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	return (
		<div className="relative p-4 md:p-11">
			<button
				ref={nextRef}
				className=" cursor-pointer absolute top-1/2 left-8 lg:left-10 z-10 -translate-y-1/2 -translate-x-1/3 lg:-translate-x-1/3 bg-white p-2 md:p-4 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
			>
				<ChevronLeft className="text-main-color" />
			</button>

			{/* الزر على اليمين: العودة للخلف (السابق) */}
			<button
				ref={prevRef}
				className="cursor-pointer absolute top-1/2 right-8 lg:right-10 z-10 -translate-y-1/2 translate-x-1/3 lg:translate-x-1/3 bg-white p-2 md:p-4 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
			>
				<ChevronRight className="text-main-color" />
			</button>
			<Swiper
				modules={[Navigation]}
				navigation={{
					prevEl: prevRef.current,
					nextEl: nextRef.current,
				}}
				onBeforeInit={(swiper) => {
					swiper.params.navigation.prevEl = prevRef.current;
					swiper.params.navigation.nextEl = nextRef.current;
				}}
				spaceBetween={24}
				breakpoints={{
					320: { slidesPerView: 1 },
					768: { slidesPerView: 1 },
					1024: { slidesPerView: 1 },
				}}
				className="pb-8"
			>
				{carouselData.map((item) => (
					<SwiperSlide key={item.id} className="relative h-[100vh]">
						<img
							src={item.Image}
							alt={item.title}
							className="absolute inset-0 w-full h-full object-cover"
						/>
						<div className="relative z-10 flex flex-col items-center md:items-center justify-center gap-3 md:gap-7 text-center p-4 h-full bg-main-color/15 font-Tajawal">
							<h2 className="text-2xl lg:text-5xl font-bold md:mb-4 text-white">
								{item.title}
							</h2>
							<ul className="grid grid-cols-1  md:grid-cols-2 gap-1 items-start text-start md:gap-4 max-w-2xl mb-6">
								{item.feature.map((feature, index) => (
									<li key={index} className=" text-white text-sm md:text-xl	">
										{feature}
									</li>
								))}
							</ul>
							<Button className="md:mt-4 p-3 md:mb-20 text-sm md:text-lg rounded-full border border-white bg-transparent font-Tajawal">
								<Link to={"/"}>تعرف على المزيد</Link>
							</Button>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
