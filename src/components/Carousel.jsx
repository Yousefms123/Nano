import { Carousel, Typography, Button } from "@material-tailwind/react";
import ImgCarousel from "../assets/imgCarousel.png";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router";
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

	return (
		<div className=" p-4 md:p-11">
			<Swiper
				slidesPerView={"auto"}
				centeredSlides={true}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className="mySwiper w-full h-[50vh] md:h-[80vh] rounded-lg"
			>
				{carouselData.map((item) => (
					<SwiperSlide key={item.id} className="relative h-[100vh]">
						<img
							src={item.Image}
							alt={item.title}
							className="absolute inset-0 w-full h-full object-cover"
						/>
						<div className="relative z-10 flex flex-col items-start md:items-center justify-center gap-3 md:gap-7 text-center p-4 h-full bg-main-color/15 font-Tajawal">
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
