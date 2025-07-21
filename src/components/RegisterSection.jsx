import React, { useRef, useState } from "react";
import MainButton from "../components/Button";
import { Option, Select } from "@material-tailwind/react";
import registerImg from "../assets/registerImg.png";
import { Check, CheckCircle } from "lucide-react";
import axios from "axios";

const RegisterSection = () => {
	// const [showAlert, setShowAlert] = useState(false);
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [stage, setStage] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [days, setDays] = useState("");
	const [preferTime, setPreferTime] = useState("");
	const [showAlert, setShowAlert] = useState(false);
	const alertRef = useRef();
	// const formRef = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const url = "https://api.sheetbest.com/sheets/f4ffb9c1-c28e-4184-9139-6f1dead99369";
		const studentData = {
			"الاسم الكامل": name,
			"عمر الطالب": age,
			"المرحلة الدراسية": stage,
			"رقم الهاتف": phoneNumber,
			"الأيام المناسبة": days,
			"الوقت المفضل": preferTime,
		};
		axios.post(url, studentData).then((response) => {
			console.log(response);
			setName("");
			setAge("");
			setStage("");
			setPhoneNumber("");
			setDays("");
			setPreferTime("");
			setShowAlert(true);
			setTimeout(() => {
				setShowAlert(false);
			}, 2000);
		});
	};

	return (
		<div className="lg:px-28">
			{showAlert && (
				<div
					ref={alertRef}
					className="fixed text-sm font-bold flex items-center gap-x-1 lg:gap-x-4 top-32 lg:right-32 z-50 border border-green-600 bg-green-500/30 text-green-600 p-2  lg:px-6 lg:py-3 rounded-lg shadow-lg shadow-green-500/30 transition-all duration-500 animate-slide-in"
				>
					<CheckCircle size={15} className="font-bold"/>
					شكرا لك سيتم التواصل معك بأقرب وقت
				</div>
			)}
			<div className="flex flex-wrap-reverse justify-center md:flex-row lg:flex-row gap-y-4 gap-x-5 mt-20">
				<div className="flex flex-col gap-y-7 text-start md:w-3/5 lg:w-[55%]">
					<div>
						<h1 className="text-lg md:text-xl lg:text-3xl font-bold mb-4">
							تسجيل الطلاب في حلقات القرآن الكريم
						</h1>
						<p className="text-sm lg:text-lg text-gray-700">
							نُرحب بتسجيل أبنائكم في الحلقات القرآنية بمركز السيب، ضمن بيئة تربوية وإيمانية
							متكاملة، وتحت إشراف معلمين مؤهلين.
						</p>
					</div>
					<form className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-4" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="اسم الطالب كامل"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							className="lg:col-span-2 w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60"
						/>

						<input
							type="number"
							placeholder="العمر"
							value={age}
							onChange={(e) => setAge(e.target.value)}
							required
							className="w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60"
						/>

						<Select
							label="المرحلة الدراسية"
							dir="rtl"
							value={stage}
							onChange={(val) => setStage(val)}
						>
							<Option value="ابتدائي">ابتدائي</Option>
							<Option value="إعدادي">إعدادي</Option>
							<Option value="ثانوي">ثانوي</Option>
						</Select>

						<input
							type="number"
							placeholder="رقم التواصل"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							required
							className="lg:col-span-2 w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60"
						/>

						<Select
							label="الأيام المناسبة"
							dir="rtl"
							value={days}
							onChange={(val) => setDays(val)}
						>
							<Option value="يوميًا">يوميًا</Option>
							<Option value="5 أيام بالأسبوع">5 أيام بالأسبوع</Option>
						</Select>

						<Select
							label="وقت الحصة المفضل"
							dir="rtl"
							value={preferTime}
							onChange={(val) => setPreferTime(val)}
						>
							<Option value="الفجر">الفجر</Option>
							<Option value="العصر">العصر</Option>
							<Option value="المغرب">المغرب</Option>
						</Select>

						<MainButton
							className="lg:col-span-2 w-full flex justify-center items-center bg-main-color rounded-full px-6 py-3 text-lg lg:text-xl"
							type="submit"
						>
							ارسال الطلب
						</MainButton>
					</form>
				</div>

				<div className="w-full md:w-[40%] h-[50%] lg:w-2/5 flex justify-center mb-5">
					<div className="rounded-lg">
						<img className="rounded-lg" src={registerImg} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default RegisterSection;
