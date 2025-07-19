import donation from "../assets/donation.png";
import { Select, Option } from "@material-tailwind/react";
import MainButton from "../components/Button";
import DynamicBreadcrumbs from "../components/DynamicBreadcrumbs";

const DonationSection = () => {
	return (
		<div className="mt-20 py-4 space-y-8 p-4 md:px-20 lg:px-28">
			<div className="mb-8 ">
				<DynamicBreadcrumbs />
			</div>
			<div className="flex flex-col gap-x-11  md:flex-row">
				<div className="hidden md:inline w-full lg:w-1/2">
					<img src={donation} alt="" />
				</div>
				<div className="flex flex-col gap-y-5 text-start w-full lg:w-1/2">
					<h1 className="text-3xl font-bold">ساهم معنا في دعم حلقات تحفيظ القرآن</h1>
					<p className="text-gray-700 text-base md:text-lg ">
						تبرعك اليوم يُحدث فرقًا في تعليم كتاب الله، ويساهم في بناء جيل قرآني يحمل القيم
						والإيمان. نحن نعمل لتوفير بيئة تعليمية راقية ومجانية لأبناء المجتمع، بدعمكم نستمر{" "}
					</p>
					<form action="" className="flex flex-col gap-y-7">
						<div>
							<label
								className="block mb-2 text-base md:text-2xl font-medium"
								htmlFor="name"
							>
								ادخل حملة التبرع
							</label>
							<div className="">
								<Select label="اختر النسخة" dir="rtl" className="">
									<Option>حملة الحفاظ</Option>
									<Option>حملة سرد القران</Option>
									<Option>حملة الحفاظ</Option>
								</Select>
							</div>
						</div>
						<div>
							<label
								className="block mb-2 text-base md:text-2xl font-medium"
								htmlFor="name"
							>
								ادخل مبلغ التبرع
							</label>
							<input
								type="text"
								placeholder="ادخل المبلغ (بالريال العماني )"
								required
								className="w-full px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
							/>
						</div>
						<MainButton className="bg-button rounded-full text-base md:text-lg lg:text-xl font-Tajawal">
							تبرع
						</MainButton>
					</form>
				</div>
			</div>
		</div>
	);
};

export default DonationSection;
