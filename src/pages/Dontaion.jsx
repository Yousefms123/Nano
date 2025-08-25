import donation from "../assets/donation.png";
import { Select, Option } from "@material-tailwind/react";
import MainButton from "../components/Button";
import DynamicBreadcrumbs from "../components/DynamicBreadcrumbs";
import { useState } from "react";

const DonationSection = () => {
	const [customAmount, setCustomAmount] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const handleDonate = async (event) => {
		event.preventDefault();

		if (!customAmount || parseFloat(customAmount) <= 0) {
			setError("الرجاء إدخال مبلغ تبرع صحيح.");
			return;
		}

		setLoading(true);
		setError("");

		// نظام اختبار وهمي
		setTimeout(() => {
			console.log("✅ تم إنشاء جلسة دفع وهمية للمبلغ:", customAmount);
			setLoading(false);

			// تحويل المستخدم لصفحة شكراً مثلاً
			window.location.href = "/success?amount=" + customAmount;
		}, 2000); // محاكاة معالجة 2 ثانية
	};

	return (
		<div className="mt-20 p-4 font-Tajawal">
			<div className="lg:ms-28 ">
				<DynamicBreadcrumbs />
			</div>

			<div className="flex flex-col gap-x-11 md:flex-row font-Tajawal space-y-8 md:mt-16 md:px-20 lg:px-28 py-4 ">
				<div className="hidden md:inline w-full lg:w-1/2">
					<img src={donation} alt="" />
				</div>

				<div className="flex flex-col gap-y-2 text-start w-full lg:w-1/2">
					<h1 className="text-3xl font-bold">ساهم معنا في دعم حلقات تحفيظ القرآن</h1>
					<p className="text-gray-700 text-base md:text-lg mt-6">
						تبرعك اليوم ؛ يُحدث فرقاً في نشر تعليم القرآن الكريم , ويساهم في بناء جيل قرآني يحمل
						القيم والأخلاق القرآنية.
					</p>
					<p className="text-gray-700 text-base md:text-lg ">
						نحن نعمل على توفير بيئة تعليمية راقية لأبناء المجتمع.
					</p>
					<p className="text-gray-700 text-base md:text-lg ">بدعمكم ؛ نستمر.</p>

					<form className="flex flex-col gap-y-7 mt-6" onSubmit={handleDonate}>
						<div>
							<label
								className="block mb-2 text-base md:text-2xl font-medium"
								htmlFor="name"
							>
								اختر نوع الكفالة
							</label>
							<Select label="اختر نوع الكفالة" dir="rtl">
								<Option>كفالة طالب 15ر.ع</Option>
								<Option>كفالة حلقة تعليم 150ر.ع</Option>
								<Option>كفالة تكريم الطلاب 5ر.ع</Option>
								<Option>كفالة إيجار مبنى المركز 250ر.ع</Option>
								<Option>كفالة عامة 1ر.ع</Option>
							</Select>
						</div>

						<div>
							<label
								className="block mb-2 text-base md:text-2xl font-medium"
								htmlFor="name"
							>
								ادخل مبلغ التبرع
							</label>
							<input
								value={customAmount}
								onChange={(e) => setCustomAmount(e.target.value)}
								type="number"
								placeholder="أدخل المبلغ"
								disabled={loading}
								className={`w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transition-all duration-200 ${
									error ? "border-red-500" : ""
								}`}
							/>
							{error && <p className="text-red-500 text-sm mt-2">{error}</p>}
						</div>

						<MainButton
							type="submit"
							className="w-full bg-button rounded-full text-white py-3 text-sm lg:text-lg font-medium font-Tajawal"
							disabled={loading}
						>
							{loading
								? "جاري المعالجة..."
								: customAmount
								? `تبرع بـ ${customAmount} ر.ع`
								: "تبرع الآن"}
						</MainButton>
					</form>
				</div>
			</div>
		</div>
	);
};

export default DonationSection;
