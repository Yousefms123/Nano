import { Star } from "lucide-react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const TestimonialsCarousel = ({ testimonials = [] }) => {
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	return (
		<section className="relative py-10">
			<button
				ref={nextRef}
				className=" cursor-pointer absolute top-1/2 left-8 lg:left-10 z-10 -translate-y-[70%] -translate-x-1/3 lg:-translate-x-[100%] bg-white p-2 md:p-4 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
			>
				<ChevronLeft className="text-main-color" />
			</button>

			<button
				ref={prevRef}
				className="cursor-pointer absolute top-1/2 right-8 lg:right-10 z-10 -translate-y-[70%] -translate-x-1/3 lg:translate-x-[100%] bg-white p-2 md:p-4 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
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
				// centeredSlides={true}
				loop={true}
				spaceBetween={30}
				// slidesPerView={1.1}
				breakpoints={{
					320: { slidesPerView: 1, spaceBetween: 5 },
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
				}}
				className="py-6"
			>
				{testimonials.map((testimonial, index) => (
					<SwiperSlide key={index} className="flex justify-center pb-3">
						<div className="bg-white border rounded-2xl p-6 flex flex-col gap-y-4  shadow-sm relative">
							<div className="flex flex-col items-center text-center gap-y-3 mt-4">
								<div className="w-20 h-20 rounded-full overflow-hidden mb-1">
									<img
										src={testimonial.image}
										alt={testimonial.name}
										className="w-full h-full object-cover"
									/>
								</div>
								<h3 className="text-lg font-semibold">{testimonial.name}</h3>
								<p className="text-gray-600 text-sm">{testimonial.text}</p>
							</div>

							<div className="flex justify-center gap-1 mt-2">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										size={18}
										className={
											i < testimonial.rating
												? "text-amber-500 stroke-none"
												: "text-gray-300"
										}
										fill={i < testimonial.rating ? "#d97706" : "none"}
									/>
								))}
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default TestimonialsCarousel;
