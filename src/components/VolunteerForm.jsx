import React, { useRef, useState } from "react";
import MainButton from "./Button";
import { Option, Select } from "@material-tailwind/react";
import { Check, CheckCircle } from "lucide-react";

import axios from "axios";
const VolunteerForm = () => {
	// const [showAlert, setShowAlert] = useState(false);
	const [name, setName] = useState("");
	const [volunteerTrack, setVolunteerTrack] = useState("");
	const [gender, setGender] = useState("");
	const [courses, setCourses] = useState("");
	const [stage, setStage] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [addressLine, setAddressLine] = useState("");
	const [showAlert, setShowAlert] = useState(false);
	const [loading, setLoading] = useState(false);
	const alertRef = useRef();
	// const formRef = useRef();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		const url = "https://sheetdb.io/api/v1/5z96qv93ef37w?sheet=volunteer-information";
		const studentData = {
			"اسم المتطوع ثلاثي": name,
			"المؤهل الدراسي": stage,
			"رقم هاتف المتطوع": phoneNumber,
			"الخبرات العملية": courses,
			"عنوان سكن المتطوع": addressLine,
			"جنس المتطوع": gender,
			"جوانب التطوع": volunteerTrack,
		};
		axios.post(url, studentData).then((response) => {
			console.log(response);
			setName("");
			setGender("");
			setStage("");
			setPhoneNumber("");
			setCourses("");
			setAddressLine("");
			setVolunteerTrack("");
			setLoading(false);
			setShowAlert(true);
			setTimeout(() => {
				setShowAlert(false);
			}, 2000);
		});
	};

	return (
		<div className="font-Tajawal">
			{showAlert && (
				<div
					ref={alertRef}
					className="fixed text-sm font-bold flex items-center gap-x-1 lg:gap-x-4 top-32 lg:right-32 z-50 border border-green-600 bg-green-500/30 text-green-600 p-2  lg:px-6 lg:py-3 rounded-lg shadow-lg shadow-green-500/30 transition-all duration-500 animate-slide-in"
				>
					<CheckCircle size={15} className="font-bold" />
					شكرا لك سيتم التواصل معك بأقرب وقت
				</div>
			)}

			<div className="flex flex-wrap-reverse justify-center md:flex-row ">
				<div className="flex flex-col gap-y-7 text-start ">
					<div>
						<h1 className="text-lg md:text-xl lg:text-3xl font-bold mb-4">
							تسجيل المتطوعين في حلقات القرآن الكريم
						</h1>
						<p className="text-sm lg:text-lg text-gray-700">
							نرحب بكم في أسرة مركز السيب القرآني , يرجى تعبئة النموذج الآتي ؛ لنتمكن من
							التواصل معكم - بمشيئة الله تعالى - ؛ حسب الحاجة
						</p>
					</div>
					<form className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-4" onSubmit={handleSubmit}>
						<input
							type="text"
							placeholder="اسم المتطوع ثلاثي"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							className=" text-sm md:text-base lg:text-lg lg:col-span-2 w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60"
						/>
						<input
							type="text"
							placeholder="الولاية / القرية"
							value={addressLine}
							onChange={(e) => setAddressLine(e.target.value)}
							required
							className=" text-sm md:text-base lg:text-lg w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60"
						/>
						<Select label="الجنس" dir="rtl" value={gender} onChange={(val) => setGender(val)}>
							<Option value="ذكر">ذكر</Option>
							<Option value="أنثى">أنثى</Option>
						</Select>
						<input
							type="number"
							placeholder="رقم التواصل (واتسأب)"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							required
							className=" text-sm md:text-base lg:text-lg lg:col-span-2 w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60"
						/>

						<Select
							label="المؤهل الدراسي"
							dir="rtl"
							value={stage}
							onChange={(val) => setStage(val)}
						>
							<Option value="دبلوم عام">دبلوم عام</Option>
							<Option value="دبلوم عالي">دبلوم عالي</Option>
							<Option value="بكالوريوس">بكالوريوس</Option>
							<Option value="ماجستير">ماجستير</Option>
							<Option value="دكتوراة">دكتوراة</Option>
						</Select>

						<input
							type="text"
							placeholder="الخبرات العلمية , والمهنية"
							value={courses}
							onChange={(e) => setCourses(e.target.value)}
							required
							className=" text-sm md:text-base lg:text-lg w-full px-4 py-3 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black/60"
						/>
						<div className="lg:col-span-2">
							<Select
								label="جوانب التطوع"
								dir="rtl"
								value={volunteerTrack}
								onChange={(val) => setVolunteerTrack(val)}
							>
								<Option value="التدريس">التدريس</Option>
								<Option value="إدارة الحلقات">إدارة الحلقات</Option>
								<Option value="تنظيم الفعاليات والمسابقات">
									تنظيم الفعاليات والمسابقات
								</Option>
								<Option value="التسويق">التسويق</Option>
								<Option value="التصميم الجرافيكي">التصميم الجرافيكي</Option>
								<Option value="التصوير الفوتوغرافي">التصوير الفوتوغرافي</Option>
							</Select>
						</div>
						<MainButton
							className={`lg:col-span-2 w-full flex justify-center items-center bg-main-color rounded-full px-6 py-3 text-sm md:text-base lg:text-lg ${
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

export default VolunteerForm;
