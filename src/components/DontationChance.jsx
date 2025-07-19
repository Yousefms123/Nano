// src/components/DonationSection.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Star, Share2, Share } from "lucide-react";
import "swiper/css";
import dontation1 from "../assets/dontation1.png";
import dontation2 from "../assets/dontation2.png";
import dontation3 from "../assets/dontation3.png";
import ImgCarousel from "../assets/imgCarousel.png";
import { Link } from "react-router";

const donationData = [
	{
		id: 1,
		category: "كفالات",
		title: "كفالة حلقة تعليمية",
		description: "كن سببًا في استمرار حلقة كاملة تشمل المكان والمعلم والاجتماعات",
		image: dontation1,
		link: "/donation",
		currentAmount: 2490,
		targetAmount: 4500,
		rating: 4.8,
	},
	{
		id: 2,
		category: "كفالات",
		title: "كفالة تكريم الطلاب",
		description: "شارِك في إدخال السرور على قلوب الطلاب من خلال دعم جوائز التكريم والتشجيع",
		image: dontation2,
		link: "/donation",
		currentAmount: 2490,
		targetAmount: 4500,
		rating: 4.8,
	},
	{
		id: 3,
		category: "كفالات",
		title: "كفالة عامة",
		description: "دعم مفتوح يستخدم حسب الحاجة في التعليم أو الإدارة والفعاليات",
		image: dontation3,
		link: "/donation",
		currentAmount: 2490,
		targetAmount: 4500,
		rating: 4.8,
	},
	{
		id: 4,
		category: "المشاريع",
		title: "مشروع توزيع المصاحف",
		description: "ساهم في نشر كتاب الله عبر دعم طباعة وتوزيع المصاحف",
		image: ImgCarousel,
		link: "/donation",
		currentAmount: 800,
		targetAmount: 2500,
		rating: 4.7,
	},
	{
		id: 5,
		category: "الزكاة",
		title: "زكاة المال",
		description: "ادفع زكاة مالك في مصارفها الشرعية لتغطي احتياجات الأسر",
		image: ImgCarousel,
		link: "/donation",
		currentAmount: 2000,
		targetAmount: 4000,
		rating: 4.9,
	},
];

const categories = ["كفالات", "المشاريع", "الزكاة"];

const DonationChance = () => {
	const [selectedCategory, setSelectedCategory] = useState("كفالات");

	const filteredDonations = donationData.filter((donation) => donation.category === selectedCategory);

	return (
		<div className="py-12 px-4">
			<h2 className="text-2xl md:text-3xl font-bold text-center mb-8">فرص التبرع</h2>

			{/* الفلاتر */}
			<div className="flex justify-center gap-4 mb-6 flex-wrap">
				{categories.map((cat) => (
					<button
						key={cat}
						className={`px-4 py-2 rounded-lg border ${
							selectedCategory === cat
								? "bg-main-color/20 text-main-color border-main-color"
								: "bg-transparent border-gray-500 text-gray-700"
						}`}
						onClick={() => setSelectedCategory(cat)}
					>
						{cat}
					</button>
				))}
			</div>

			{/* عرض الكروت بشكل Grid بدلاً من Swiper */}
			<div className="flex flex-wrap gap-x-5 mx-auto justify-center items-center p-3">
				{filteredDonations.map((item, index) => {
					const percentage = Math.min(
						100,
						(item.currentAmount / item.targetAmount) * 100
					).toFixed();

					return (
						<div
							key={index}
							className="relative pb-4 flex flex-col justify-between my-6 bg-white shadow-sm border border-slate-200 rounded-xl w-96 font-Tajawal"
						>
							<div className="flex flex-col">
								<div className="relative h-64 w-full overflow-hidden rounded-t-xl">
									<img
										src={item.image}
										alt="card-image"
										className="h-full w-full object-cover rounded-b-none z-20  aspect-video transition-transform duration-300 hover:scale-105"
									/>
									<div className="rounded-full bg-white absolute top-3 left-2.5 p-3 cursor-pointer">
										<Share size={20} className="text-main-color text-xl" />
									</div>
								</div>

								<div className="p-4">
									<div className="mb-2 flex items-center justify-between">
										<p className="text-slate-800 text-xl font-semibold">
											{item.title}
										</p>
										<div className="flex items-center gap-1">
											<p className="text-gray-600 text-base">
												{item.rating}
											</p>
											<Star
												size={20}
												className="fill-amber-500 stroke-none"
											/>
										</div>
									</div>
									<p
										className="text-gray-600  text-sm  text-start "
										title={item.description || ""}
									>
										{item.description
											? item.description.length > 120
												? `${item.description.slice(0, 120)}...`
												: item.description
											: ""}
									</p>
								</div>
							</div>

							<div className="px-4 py-2">
								<div className="w-full">
									<div className="flex relative justify-between text-sm text-gray-600 font-medium mb-1">
										<span
											className="absolute bottom-1.5 text-[10px] md:text-base"
											style={{
												right: `${percentage}%`,
												transform: "translateX(50%)",
												display:
													item.currentAmount === item.targetAmount
														? "none"
														: "inline",
											}}
										>
											{item.currentAmount}$
										</span>
										<span className="absolute bottom-1.5 left-0 text-[10px] md:text-base">
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

							<div className="px-4 flex flex-col justify-between items-start">
								<Link
									to={`/donate/item?title=${encodeURIComponent(
										item.title
									)}&id=${index}&amount=${item.currentAmount}&target=${
										item.targetAmount
									}&rate=${item.rate}&image=${item.image}&desc=${item.description}`}
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
					);
				})}
			</div>
		</div>
	);
};

export default DonationChance;
