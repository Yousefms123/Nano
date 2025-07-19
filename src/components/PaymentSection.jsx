import React from "react";
import { useSearchParams } from "react-router";
import DynamicBreadcrumbs from "../components/DynamicBreadcrumbs";
import { Checkbox, Option, Select } from "@material-tailwind/react";
import { Check } from "lucide-react";

const PaymentSection = () => {
	const [params] = useSearchParams();

	const title = params.get("title") || "مشروع خيري";
	const desc = params.get("desc") || "تفاصيل المشروع";
	const img = params.get("img") || "/default.png"; // إذا لم يوجد صورة
	const amount = params.get("amount") || "10";

	return (
		<div className="mt-20 px-6 lg:px-28 flex flex-col lg:flex-row gap-10 font-Tajawal">
			{/* ملخص العملية */}

			{/* نموذج الدفع */}
			<div className="w-full lg:w-2/3 text-start">
				<h2 className="text-xl font-bold mb-2">معلومات جهة الاتصال</h2>
				<p className="mb-6">سنستخدم هذا البريد الإلكتروني لنرسل إليك تفاصيل وتحديثات بشأن طلبك.</p>
				<form>
					<div className="flex flex-col gap-y-8">
						<input
							type="email"
							placeholder="البريد الإلكتروني"
							className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
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
								<Select label="اختر البلد" dir="rtl" className="">
									<Option>عُمان</Option>
									<Option>مصر</Option>
									<Option>السعودية</Option>
								</Select>
							</div>
							<input
								type="text"
								placeholder="العنوان"
								className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
							/>
							<input
								type="text"
								placeholder="الاسم الأول"
								className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
							/>
							<input
								type="text"
								placeholder="الاسم الأخير"
								className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
							/>
							<input
								type="text"
								placeholder="المدينة"
								className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
							/>
							<input
								type="text"
								placeholder="العنوان"
								className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
							/>
							<input
								type="text"
								placeholder="المنطقة"
								className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
							/>
							<input
								type="text"
								placeholder="الرمز البريدي"
								className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
							/>

							<h3 className="lg:col-span-2 mt-6 text-lg font-semibold">خيارات الدفع</h3>
							<div className="lg:col-span-2 flex gap-6 mb-2">
								<label className="flex items-center gap-2">
									<input type="radio" name="payment" defaultChecked />
									<span>Credit Card</span>
								</label>
								<label className="flex items-center gap-2">
									<input type="radio" name="payment" />
									<span>PayPal</span>
								</label>
							</div>

							<input
								type="text"
								inputMode="numeric"
								pattern="\d{16}"
								placeholder="رقم البطاقة"
								onInput={(e) => {
									if (e.target.value.length > 16) {
										e.target.value = e.target.value.slice(0, 16);
									}
								}}
								className="md:col-span-2 w-full px-4 pt-4 pb-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transition-all duration-200"
								id="card-number"
							/>
							<input
								type="number"
								inputMode="numeric"
								pattern="\d{3,4}"
								placeholder="CVV"
								onInput={(e) => {
									if (e.target.value.length > 4) {
										e.target.value = e.target.value.slice(0, 4);
									}
								}}
								className="w-full px-4 pt-6 pb-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transition-all duration-200"
								id="cvv"
							/>
							<div className="relative w-full">
								<input
									type="date"
									id="expiry-date"
									className="w-full px-4 pt-6 pb-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transition-all duration-200"
									placeholder=" "
								/>
								<label
									htmlFor="expiry-date"
									className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-500"
								>
									تاريخ الصلاحية
								</label>
							</div>
							<label class="flex items-center gap-2 cursor-pointer select-none">
								<input type="checkbox" class="peer hidden" />
								<div class="w-5 h-5 border-2 border-main-color rounded flex items-center justify-center peer-checked:bg-main-color peer-checked:border-main-color relative transition">
									<Check className="text-white" />
								</div>
								<span class="text-gray-800">حفظ كبطاقة افتراضية</span>
							</label>

							<div className="lg:col-span-2">
								<button
									type="submit"
									className="bg-main-color text-white w-full py-3 rounded-full mt-4 hover:bg-opacity-90 transition"
								>
									تأكيد الدفع
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
							<span>{amount} ر.ع</span>
						</p>
						<p className="flex justify-between">
							<span>الخصم</span>
							<span>0 ر.ع</span>
						</p>
					</div>
					<p className="flex justify-between font-bold  mt-5">
						<span>الإجمالي</span>
						<span className="text-main-color">{amount} ر.ع</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default PaymentSection;
