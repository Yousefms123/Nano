import React, { useRef, useState } from "react";
import MainButton from "./Button";
import { Option, Select } from "@material-tailwind/react";
import { Check, CheckCircle } from "lucide-react";

import axios from "axios";
const SessionFrom = () => {
	// const [showAlert, setShowAlert] = useState(false);
	const [program, setProgram] = useState("");
	const [sessionName, setSesionName] = useState("");
	const [teacherPhone, setTeacherPhone] = useState("");
	const [teacherName, setTeacherName] = useState("");
	const [supervisorPhone, setSupervisorPhone] = useState("");
	const [supervisorName, setSupervisorName] = useState("");
	const [addressLine, setAddressLine] = useState("");
	const [showAlert, setShowAlert] = useState(false);
	const [loading, setLoading] = useState(false);
	const alertRef = useRef();
	// const formRef = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const url = "https://sheetdb.io/api/v1/5z96qv93ef37w?sheet=session-information";
		const studentData = {
			"اسم البرنامج": program,
			"اسم الحلقة": sessionName,
			"موقع الحلقة": addressLine,
			"معلم الحلقة": teacherName,
			"رقم هاتف معلم الحلقة": teacherPhone,
			"مشرف الحلقة": supervisorName,
			"رقم هاتف مشرف الحلقة": supervisorPhone,
		};
		axios.post(url, studentData).then((response) => {
			console.log(response);

			setProgram("");
			setSesionName("");
			setTeacherPhone("");
			setTeacherName("");
			setSupervisorPhone("");
			setSupervisorName("");
			setAddressLine("");
			setLoading(false);
			setShowAlert(true);
			setTimeout(() => {
				setShowAlert(false);
			}, 2000);
		});
	};

	return (
		<div className="">
			{showAlert && (
				<div
					ref={alertRef}
					className="fixed text-sm font-bold flex items-center gap-x-1 lg:gap-x-4 top-32 lg:right-32 z-50 border border-green-600 bg-green-500/30 text-green-600 p-2  lg:px-6 lg:py-3 rounded-lg shadow-lg shadow-green-500/30 transition-all duration-500 animate-slide-in"
				>
					<CheckCircle size={15} className="font-bold" />
					شكرا لك سيتم التواصل معك بأقرب وقت
				</div>
			)}

			<div className="flex flex-wrap-reverse justify-center md:flex-row font-Tajawal">
				<div className="flex flex-col gap-y-7 text-start ">
					<div>
						<h1 className="text-lg md:text-xl lg:text-3xl font-bold mb-4">
							تسجيل حلقات قرآنية تعليمية
						</h1>
						<p className="text-sm lg:text-lg text-gray-700">
							يرجى تعبئة النموذج التالي لتسجيل حلقة جديدة ضمن برامج مركز السيب القرآني، مع
							تحديد المعلومات اللازمة لتسهيل تنظيم الجداول والمتابعة.
						</p>
					</div>
					<form className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-4" onSubmit={handleSubmit}>
						<div className="lg:col-span-2">
							<Select
								label="اسم البرنامج"
								dir="rtl"
								value={program}
								onChange={(val) => setProgram(val)}
							>
								<Option value="ما قبل المدرسة (برنامج البذرة المباركة)">
									ما قبل المدرسة (برنامج البذرة المباركة)
								</Option>
								<Option value="إتقان التلاوة">إتقان التلاوة</Option>
								<Option value=" الحفظ والمراجعة"> الحفظ والمراجعة</Option>
								<Option value="الإقراء والإجازات">الإقراء والإجازات</Option>
							</Select>
						</div>
						<input
							type="text"
							placeholder="اسم الحلقة"
							value={sessionName}
							onChange={(e) => setSesionName(e.target.value)}
							required
							className=" w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60"
						/>
						<input
							type="text"
							placeholder="موقع الحلقة"
							value={addressLine}
							onChange={(e) => setAddressLine(e.target.value)}
							required
							className=" w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60"
						/>
						<input
							type="text"
							placeholder="معلم الحلقة"
							value={teacherName}
							onChange={(e) => setTeacherName(e.target.value)}
							required
							className=" w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60"
						/>
						<input
							type="number"
							placeholder="رقم هاتف معلم الحلقة"
							value={teacherPhone}
							onChange={(e) => setTeacherPhone(e.target.value)}
							required
							className="w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60"
						/>
						<input
							type="text"
							placeholder="مشرف الحلقة"
							value={supervisorName}
							onChange={(e) => setSupervisorName(e.target.value)}
							required
							className=" w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60"
						/>
						<input
							type="number"
							placeholder="رقم هاتف مشرف الحلقة"
							value={supervisorPhone}
							onChange={(e) => setSupervisorPhone(e.target.value)}
							required
							className="w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60"
						/>

						<MainButton
							className={`lg:col-span-2 w-full flex justify-center items-center bg-main-color rounded-full px-6 py-3 text-lg lg:text-xl ${
								loading ? "bg-main-color/65 cursor-wait " : "bg-main-color text-white"
							}`}
							type="submit"
							disabled={loading}
						>
							{loading ? (
								<>
									<span>الرجاء الانتظار</span>
									<span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-5"></span>
								</>
							) : (
								"إرسال الطلب"
							)}
						</MainButton>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SessionFrom;
