import React, { useState } from "react";
import { useSearchParams, Link, useNavigate } from "react-router";
import { Star, CreditCard, Heart, HandCoins } from "lucide-react";
import MainButton from "../components/Button";
import DynamicBreadcrumbs from "../components/DynamicBreadcrumbs";

const DonationSection = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [customAmount, setCustomAmount] = useState("");

	// استخراج البيانات من URL parameters
	const projectTitle = searchParams.get("title") || "مشروع خيري";
	const descTitle = searchParams.get("desc") || "";
	// const projectId = searchParams.get("id") || "1";
	const currentAmount = searchParams.get("amount") || "0";
	const targetAmount = searchParams.get("target") || "1000";
	const rating = searchParams.get("rate") || "4.5";
	const img = searchParams.get("image") || null;
	const handleDonate = (e) => {
		e.preventDefault();

		if (!customAmount || isNaN(customAmount) || parseFloat(customAmount) <= 0) {
			alert("يرجى إدخال مبلغ صحيح للتبرع.");
			return;
		}

		navigate(
			`/payment?title=${encodeURIComponent(projectTitle)}&desc=${encodeURIComponent(
				descTitle
			)}&amount=${customAmount}&img=${encodeURIComponent(img)}`
		);
	};
	const percentage = Math.min(100, (parseInt(currentAmount) / parseInt(targetAmount)) * 100).toFixed();

	return (
		<div className="mt-20 py-4 font-Tajawal">
			<div className="mx-auto px-4 font-Tajawal">
				<div className="mb-8 lg:ms-28">
					<DynamicBreadcrumbs />
				</div>

				<div className="grid md:grid-cols-2 gap-8 space-y-8 mt-16 md:px-20 lg:px-28 ">
					<div className="w-full">
						<img className="rounded-lg w-full" src={img} alt="" />
					</div>
					<div className="flex flex-col items-start text-start gap-y-1 lg:gap-y-6">
						<div>
							<h1 className="text-3xl font-bold text-gray-900 mb-4">{projectTitle}</h1>
							<p className="text-sm md:text-base lg:text-lg  text-gray-700">{descTitle}</p>
						</div>
						<div className="flex flex-wrap items-center gap-x-5 gap-y-3">
							<div className="flex items-center gap-x-3">
								<HandCoins stroke="#97280e" className="text" />
								<p className="text-sm md:text-base lg:text-lg">عدد مرات التبرع</p>
								<p className="text-main-color text-sm md:text-base lg:text-lg">
									913 مرة
								</p>
							</div>
							<span className="hidden md:inline">|</span>
							<div className="flex items-center gap-x-2">
								<Star fill="#fbbf24" className="stroke-none text-amber-600" />
								<span className="text-sm md:text-base lg:text-lg">{rating}</span>
								<p className="text-main-color text-sm md:text-base lg:text-lg">
									(8 تقييمات )
								</p>
							</div>
						</div>
						<div className="w-full">
							<div className="mb-4">
								<div className="flex justify-between text-sm text-gray-600 mb-2">
									<span>المبلغ المحصل: {currentAmount}$</span>
									<span>الهدف: {targetAmount}$</span>
								</div>
								<div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
									<div
										className="h-full bg-amber-600 rounded-full transition-all duration-300"
										style={{ width: `${percentage}%` }}
									></div>
								</div>
								<div className="text-center mt-2">
									<span className="text-sm text-gray-600">
										تم تحصيل{" "}
										<span className="font-bold text-main-color">
											{percentage}%
										</span>{" "}
										من الهدف
									</span>
								</div>
							</div>
						</div>
						<div className="w-full">
							<form className="flex flex-col gap-y-3 lg:gap-y-6" onSubmit={handleDonate}>
								<label
									className="block mb-2 text-[14px] md:text-xl font-medium"
									htmlFor="name"
								>
									ادخل مبلغ التبرع
								</label>
								<input
									type="number"
									placeholder="ادخل المبلغ (بالريال العماني )"
									value={customAmount}
									onChange={(e) => setCustomAmount(e.target.value)}
									required
									className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
								/>

								<MainButton
									type="submit"
									className="w-full bg-button rounded-full text-white py-3 text-sm lg:text-lg font-medium"
								>
									{customAmount ? `تبرع بـ ${customAmount} ريال` : "تبرع الآن"}
								</MainButton>
							</form>
						</div>
					</div>

					{/* نموذج التبرع */}
				</div>
			</div>
		</div>
	);
};

export default DonationSection;
