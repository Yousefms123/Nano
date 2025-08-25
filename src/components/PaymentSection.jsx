import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import DynamicBreadcrumbs from "../components/DynamicBreadcrumbs";
import { Checkbox, Option, Select } from "@material-tailwind/react";
import { Check, Loader } from "lucide-react";
import { useData } from "../data/dataContext";
// import axios from "axios";

const PaymentSection = () => {
	const [params] = useSearchParams();
	// const navigate = useNavigate();
	const { cardData, donationData } = useData();
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		email: "",
		firstName: "",
		lastName: "",
		address: "",
		city: "",
		region: "",
		postalCode: "",
		country: "عُمان",
	});

	const title = params.get("title") || "";
	const amount = params.get("amount") || "10";

	const project =
		cardData.find((item) => item.title === title) || donationData.find((item) => item.title === title);

	if (!project) return <div>المشروع غير موجود</div>;

	const desc = project.description;
	const img = project.image;

	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleCountryChange = (value) => {
		setFormData({
			...formData,
			country: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			// 🔹 اعمل محاكاة (simulate) كأنه في سيرفر بيرجع session_url
			setTimeout(() => {
				setIsLoading(false);

				// بدل ما يروح لبوابة دفع حقيقية، رح يروح على صفحة وهمية عندك
				window.location.href = "/success?amount=" + amount + "&title=" + title;
			}, 2000); // 2 ثواني محاكاة للتحميل
		} catch (error) {
			console.error("Payment error:", error);
			setIsLoading(false);
			alert("حدث خطأ أثناء عملية الدفع. يرجى المحاولة مرة أخرى.");
		}
	};

	return (
		<div className="mt-20 px-6 lg:px-28 flex flex-col lg:flex-row gap-10 font-Tajawal">
			<div className="w-full lg:w-2/3 text-start">
				<h2 className="text-xl font-bold mb-2">معلومات جهة الاتصال</h2>
				<p className="mb-6">سنستخدم هذا البريد الإلكتروني لنرسل إليك تفاصيل وتحديثات بشأن طلبك.</p>
				<form onSubmit={handleSubmit}>
					<div className="flex flex-col gap-y-8">
						<input
							type="email"
							name="email"
							value={formData.email}
							onChange={handleInputChange}
							placeholder="البريد الإلكتروني"
							className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
							required
						/>
						<div>
							<h1 className="text-lg md:text-xl lg:text-3xl font-bold mb-4">
								عنوان الفاتورة
							</h1>
							<p className="text-sm md:text-base lg:text-lg text-gray-700">
								أدخل عنوان الفوترة الذي يطابق طريقة دفعك.
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2  gap-4">
							<div className="">
								<Select
									label="اختر البلد"
									dir="rtl"
									value={formData.country}
									onChange={handleCountryChange}
									className=""
								>
									<Option value="عُمان">عُمان</Option>
									<Option value="مصر">مصر</Option>
									<Option value="السعودية">السعودية</Option>
								</Select>
							</div>
							<input
								type="text"
								name="address"
								value={formData.address}
								onChange={handleInputChange}
								placeholder="العنوان"
								className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
								required
							/>
							<input
								type="text"
								name="firstName"
								value={formData.firstName}
								onChange={handleInputChange}
								placeholder="الاسم الأول"
								className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
								required
							/>
							<input
								type="text"
								name="lastName"
								value={formData.lastName}
								onChange={handleInputChange}
								placeholder="الاسم الأخير"
								className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
								required
							/>
							<input
								type="text"
								name="city"
								value={formData.city}
								onChange={handleInputChange}
								placeholder="المدينة"
								className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
								required
							/>
							<input
								type="text"
								name="region"
								value={formData.region}
								onChange={handleInputChange}
								placeholder="المنطقة"
								className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
								required
							/>
							<input
								type="text"
								name="postalCode"
								value={formData.postalCode}
								onChange={handleInputChange}
								placeholder="الرمز البريدي"
								className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
								required
							/>

							<h3 className="lg:col-span-2 mt-6 text-lg font-semibold">معلومات إضافية</h3>
							<div className="lg:col-span-2">
								<p className="text-sm text-gray-600 mb-4">
									سيتم تحويلك إلى صفحة الدفع الآمنة بعد تأكيد المعلومات
								</p>
							</div>

							<div className="lg:col-span-2">
								<button
									type="submit"
									disabled={isLoading}
									className="bg-main-color text-white w-full py-3 rounded-full mt-4 hover:bg-opacity-90 transition flex items-center justify-center"
								>
									{isLoading ? (
										<>
											<Loader className="animate-spin mr-2" size={20} />
											جاري معالجة الدفع...
										</>
									) : (
										"تأكيد الدفع"
									)}
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div className="bg-white lg:sticky top-28 border-2 border-gray-300 rounded-lg h-fit p-6 w-full lg:w-1/3 text-start">
				<h2 className="text-lg font-semibold mb-4">ملخص العملية</h2>
				<div className="flex items-center gap-4 mb-4 border-b pb-3 border-b-gray-300">
					<img src={img} alt={title} className="w-20 h-20 rounded" />
					<div>
						<h3 className="font-bold">{title}</h3>
						<p className="text-sm text-gray-600 line-clamp-2">{desc}</p>
					</div>
				</div>
				<div className="text-sm text-gray-700 ">
					<div className="flex flex-col gap-y-3 border-b pb-3 border-b-gray-300">
						<p className="flex justify-between">
							<span>المجموع</span>
							<span>{amount} $</span>
						</p>
						<p className="flex justify-between">
							<span>الخصم</span>
							<span>0 $</span>
						</p>
					</div>
					<p className="flex justify-between font-bold  mt-5">
						<span>الإجمالي</span>
						<span className="text-main-color">{amount} $</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default PaymentSection;
