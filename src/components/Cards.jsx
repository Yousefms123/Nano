import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Copy, Share, Star, X } from "lucide-react";

// Swiper Carousel
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useData } from "../data/dataContext";

const DonationCardItem = () => {
	const [openIndex, setOpenIndex] = useState(null);
	const { cardData } = useData();
	const handleShareClick = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const handleCopyLink = (item) => {
		const baseUrl = `${window.location.origin}/donate/item`;
		const params = new URLSearchParams({
			title: item.title,
		});

		const fullLink = `${baseUrl}?${params.toString()}`;
		navigator.clipboard
			.writeText(fullLink)
			.then(() => alert("✅ تم نسخ رابط التبرع لهذا المشروع"))
			.catch(() => alert("❌ حدث خطأ أثناء نسخ الرابط"));
	};

	return (
		<div className="px-4 mt-20 py-4 md:px-12 lg:px-12">
			<h1 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900 font-Tajawal">
				مشاريع نوعية
			</h1>
			<div className="relative">
				<button className="swiper-next absolute top-1/2 left-0 z-10 -translate-y-1/2 -translate-x-1/3 lg:-translate-x-1/3 bg-white p-2 md:p-4 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300">
					<ChevronLeft className="text-main-color" />
				</button>

				{/* الزر على اليمين: العودة للخلف (السابق) */}
				<button className="swiper-prev absolute top-1/2 right-0 z-10 -translate-y-1/2 translate-x-1/3 lg:translate-x-1/3 bg-white p-2 md:p-4 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300">
					<ChevronRight className="text-main-color" />
				</button>

				<Swiper
					modules={[Navigation]}
					navigation={{
						prevEl: ".swiper-prev",
						nextEl: ".swiper-next",
					}}
					spaceBetween={24}
					breakpoints={{
						320: { slidesPerView: 1, spaceBetween: 16 },
						768: { slidesPerView: 2, spaceBetween: 24 },
						1024: { slidesPerView: 3, spaceBetween: 24 },
					}}
					className="pb-8"
				>
					{cardData.map((item, index) => {
						const percentage = Math.min(
							100,
							(item.currentAmount / item.targetAmount) * 100
						).toFixed(0);

						return (
							<SwiperSlide key={index} className="h-full">
								<div className=" h-full bg-white rounded-xl  transition-shadow duration-300 border border-gray-200 font-Tajawal">
									<div className="relative h-64 w-full overflow-hidden rounded-t-xl">
										<img
											src={item.image}
											alt={item.title}
											className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
										/>
										<div className="absolute top-4 left-4 ">
											{/* زر المشاركة */}
											<button
												onClick={() => handleShareClick(index)}
												className="bg-white p-2 rounded-full shadow-md cursor-pointer hover:bg-gray-100 transition"
											>
												{openIndex === index ? (
													<X
														size={20}
														className="text-main-color "
													/>
												) : (
													<Share
														size={20}
														className="text-main-color"
													/>
												)}
											</button>

											{openIndex === index && (
												<div className="mt-3 absolute w-[130px] left-4 border border-gray-300 p-2 rounded bg-gray-100 shadow-md transition-all">
													<button
														onClick={() =>
															handleCopyLink(item, index)
														}
														className="text-sm flex gap-x-3 justify-center items-center bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
													>
														نسخ الرابط{" "}
														<Copy
															size={10}
															className="text-white"
														/>
													</button>
												</div>
											)}
										</div>
									</div>

									{/* هذا القسم سيمتد لملء الفراغ ويدفع الزر لأسفل */}
									<div className="p-5 flex flex-col justify-between h-64">
										<div className="mb-3 flex items-center justify-between">
											<h3 className="text-xl font-bold text-gray-800">
												{item.title}
											</h3>
											<div className="flex items-center gap-1 px-2 py-1 rounded-full">
												<p className="text-base text-gray-600 ">
													{item.rate}
												</p>
												<Star
													size={18}
													className="fill-amber-500 stroke-amber-500"
												/>
											</div>
										</div>

										<p
											className="text-gray-600 leading-relaxed text-sm mb-4 text-start flex-grow"
											title={item.description || ""}
										>
											{item.description
												? item.description.length > 120
													? `${item.description.slice(0, 80)}...`
													: item.description
												: ""}
										</p>

										{/* شريط التقدم */}
										<div className="pt-4">
											<div className="w-full">
												<div className="flex relative justify-between text-sm text-gray-600 font-medium mb-1">
													<span
														className="absolute bottom-1.5"
														style={{
															right: `${percentage}%`,
															transform: "translateX(50%)",
															display:
																item.currentAmount ===
																item.targetAmount
																	? "none"
																	: "inline",
														}}
													>
														{item.currentAmount}$
													</span>
													<span className="absolute bottom-1.5 left-0">
														{item.targetAmount}$
													</span>
												</div>
												<div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
													<div
														className="h-full bg-[#822F14] rounded-full transition-all duration-300"
														style={{ width: `${percentage}%` }}
													></div>
												</div>
											</div>
										</div>

										{/* الزر في الأسفل */}
										<Link
											to={`/donate/item?title=${encodeURIComponent(
												item.title
											)}`}
											className="w-full"
										>
											<button
												className="rounded-md w-full mt-6 bg-transparent text-main-color py-2 px-4 border border-main-color cursor-pointer text-center text-sm transition-all shadow-md hover:shadow-lg disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
												type="button"
											>
												تبرع هنا
											</button>
										</Link>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
};

export default DonationCardItem;
