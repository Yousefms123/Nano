import React from "react";

import { Link } from "react-router";
import { Share, Star } from "lucide-react";
import ImgCarousel from "../assets/imgCarousel.png";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
const DonationCardItem = () => {
	const cardData = [
		{
			image: Project1,
			title: "كفالة ايجار مبنى",
			description: "ساهم في تغطية تكاليف إيجار المبنى الذي يحتضن الأنشطة القرآنية",
			link: "/donation",
			rate: "4.9",
			currentAmount: 200,
			targetAmount: 4500,
		},
		{
			image: Project2,
			title: "تعليم القرآن للأطفال",
			description:
				"شارك في نشر الخير من خلال دعم حلقات تحفيظ القرآن للأطفال، وتوفير بيئة تربوية تُحببهم في كتاب الله وتغرس فيهم القيم الإسلامية",
			link: "/donation",
			rate: "4.8",
			currentAmount: 1005,
			targetAmount: 4500,
		},
		{
			image: Project3,
			title: "كفالة الطالب",
			description: "ساهم في تعليم طالبٍ القرآن الكريم وتوفير بيئة آمنة له",
			link: "/donation",
			rate: "4.2",
			currentAmount: 2800,
			targetAmount: 4500,
		},
	];

	return (
		<div className="flex flex-wrap gap-x-5 mx-auto justify-center  p-3">
			{cardData.map((item, index) => {
				const percentage = Math.min(100, (item.currentAmount / item.targetAmount) * 100).toFixed();

				return (
					<div
						key={index}
						className="relative flex flex-col justify-between my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 font-Tajawal"
					>
						<div className="flex flex-col">
							<div className="relative h-96 bg-clip-border z-10">
								<img
									src={item.image}
									alt="card-image"
									className="h-full w-full object-cover rounded-b-none z-20 rounded-s-md rounded-e-md aspect-video"
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
										<p className="text-slate-800 text-base">{item.rate}</p>
										<Star size={20} className="fill-amber-500 stroke-none" />
									</div>
								</div>
								<p className="text-slate-600 leading-normal font-light text-start">
									{item.description}
								</p>
							</div>
						</div>

						<div className="p-4">
							<div className="w-full">
								<div className="flex relative justify-between text-sm text-gray-600 font-medium mb-1">
									<span
										className="absolute bottom-1.5"
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

						<div className="p-4 flex flex-col justify-between items-start">
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
	);
};

export default DonationCardItem;
