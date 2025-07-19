import React, { useRef, useState } from "react";
import MainButton from "../components/Button";
import { Option, Select } from "@material-tailwind/react";
import registerImg from "../assets/registerImg.png";
import { Check } from "lucide-react";
const RegisterSection = () => {
	const [showAlert, setShowAlert] = useState(false);
	const [stage, setStage] = useState("");
	const [days, setDays] = useState("");
	const [time, setTime] = useState("");
	const alertRef = useRef();
	const formRef = useRef();
	const handleSubmit = (e) => {
		e.preventDefault();

		setShowAlert(true);
		setTimeout(() => {
			setShowAlert(false);
		}, 3000);

		// تمرير المستخدم لأعلى الرسالة
		setTimeout(() => {
			alertRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
		}, 100);
		formRef.current.reset();
		setStage(null);
		setDays(null);
		setTime(null);
	};
	return (
		<div className="lg:px-28">
			{showAlert && (
				<div
					ref={alertRef}
					className="fixed flex items-center gap-x-4 top-32 right-32 z-50 bg-green-500/40 text-green-600 px-6 py-3 rounded-lg shadow-lg transition-all duration-500 animate-slide-in"
				>
					<Check />
					تم إرسال الطلب بنجاح
				</div>
			)}
			<div className="flex flex-wrap-reverse justify-center   md:flex-row lg:flex-row  gap-y-4 gap-x-5  mt-20">
				<div className="flex flex-col gap-y-7 text-start md:w-3/5 lg:w-[55%]">
					<div className="">
						<h1 className="text-lg md:text-xl lg:text-3xl font-bold mb-4">
							تسجيل الطلاب في حلقات القرآن الكريم
						</h1>
						<p className="text-sm  lg:text-lg text-gray-700">
							نُرحب بتسجيل أبنائكم في الحلقات القرآنية بمركز السيب، ضمن بيئة تربوية وإيمانية
							متكاملة، وتحت إشراف معلمين مؤهلين.
						</p>
					</div>
					<form
						ref={formRef}
						className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-4 "
						onSubmit={handleSubmit}
					>
						<input
							id="name"
							type="text"
							placeholder="اسم الطالب كامل"
							required
							className="lg:col-span-2 w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
						/>

						<input
							id="age"
							type="number"
							placeholder="العمر"
							required
							className="w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
						/>
						<div className="">
							<Select
								label="المرحلة الدراسية"
								dir="rtl"
								value={stage}
								onChange={(val) => setStage(val)}
							>
								<Option>ابتدائي</Option>
								<Option>إعدادي</Option>
								<Option>ثانوي</Option>
							</Select>
						</div>
						<input
							id="phoneNumber"
							type="number"
							placeholder="رقم التواصل"
							required
							className="lg:col-span-2 w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60 transtion-all duration-200"
						/>
						<div className="">
							<Select
								label="الأيام المناسبة"
								dir="rtl"
								value={days}
								onChange={(val) => setDays(val)}
							>
								<Option>يومياَ</Option>
								<Option>5 أيام بالأسبوع</Option>
							</Select>
						</div>
						<div className="">
							<Select
								label="وقت الحصة المفضل"
								dir="rtl"
								value={time}
								onChange={(val) => setTime(val)}
							>
								<Option>الفجر</Option>
								<Option>العصر</Option>
								<Option>المغرب</Option>
							</Select>
						</div>

						<MainButton
							className="lg:col-span-2 w-full flex justify-center items-center  bg-main-color rounded-full px-6 py-3 text-lg lg:text-xl"
							type="submit"
						>
							ارسال الطلب
						</MainButton>
					</form>
				</div>

				<div className="w-full md:w-[40%] h-[50%] lg:w-2/5 flex justify-center mb-5">
					<div className=" rounded-lg">
						<img className=" rounded-lg" src={registerImg} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterSection;
