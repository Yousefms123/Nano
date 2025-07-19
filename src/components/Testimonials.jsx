import { useState } from "react";
import { Star } from "lucide-react";
import MainButton from "./Button";

const Testimonials = ({ testimonials = [] }) => {
	const [visibleCount, setVisibleCount] = useState(4);
	const [isLoading, setIsLoading] = useState(false);

	const handleLoadMore = () => {
		setIsLoading(true);
		setTimeout(() => {
			setVisibleCount((prev) => prev + 4);
			setIsLoading(false);
		}, 500);
	};

	return (
		<section>
			<div className="grid gap-6 md:grid-cols-2 lg:px-28">
				{testimonials.slice(0, visibleCount).map((testimonial, index) => (
					<div
						key={index}
						className="bg-white border rounded-2xl p-4 flex flex-col gap-y-3 md:flex-row   gap-x-5"
					>
						<div className="w-[30%] md:w-[20%]">
							<img
								src={testimonial.image}
								alt={testimonial.name}
								className="w-full rounded-full object-cover mb-4"
							/>
						</div>
						<div className="flex flex-col w-full">
							<div className="flex w-full justify-between">
								<h3 className="text-base font-semibold mb-2">{testimonial.name}</h3>
								<div className="flex gap-1">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											size={20}
											className={
												i < testimonial.rating
													? "text-amber-600 stroke-none"
													: "text-gray-400"
											}
											fill={i < testimonial.rating ? "#d97706" : "none"}
										/>
									))}
								</div>
							</div>
							<p className="text-gray-700 mb-4 text-start text-sm">{testimonial.text}</p>
						</div>
					</div>
				))}
			</div>

			{visibleCount < testimonials.length && (
				<div className="mt-14 flex items-center justify-center">
					{isLoading ? (
						<div className="text-main-color text-lg animate-pulse">جارٍ التحميل...</div>
					) : (
						<MainButton
							onClick={handleLoadMore}
							className="bg-main-color text-white text-lg rounded-full md:px-7 py-3"
						>
							اقرأ المزيد
						</MainButton>
					)}
				</div>
			)}
		</section>
	);
};

export default Testimonials;
