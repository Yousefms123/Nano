import React, { useState } from "react";
import MainButton from "../components/Button";
import { Option, Select } from "@material-tailwind/react";
import registerImg from "../assets/registerImg.png";
import { Check, CheckCircle } from "lucide-react";

// import axios from "axios";
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel } from "@material-tailwind/react";
import StudentForm from "./StudentForm";
import TeacherFrom from "./TeacherForm";
import SupervisorForm from "./SupervisorForm";
import SessionFrom from "./SessionForm";
const RegisterSection = () => {
	const [activeTab, setActiveTab] = useState("تسجيل طالب");
	const data = [
		{
			label: "تسجيل طالب",
			value: "تسجيل طالب",
			desc: <StudentForm />,
		},
		{
			label: "تسجيل معلم",
			value: "تسجيل معلم",
			desc: <TeacherFrom />,
		},
		{
			label: "تسجيل مشرف",
			value: "تسجيل مشرف",
			desc: <SupervisorForm />,
		},
		{
			label: "تسجيل حلقة",
			value: "تسجيل حلقة",
			desc: <SessionFrom />,
		},
	];

	return (
		<div className="lg:px-28">
			<Tabs className="" value={activeTab}>
				<TabsHeader
					className="rounded-none  border-blue-gray-50 bg-transparent p-0 w-[100%] md:w-[80%] md:mx-auto lg:w-[50%] lg:mx-0"
					indicatorProps={{
						className: "bg-transparent border-b-2 border-main-color shadow-none rounded-none",
					}}
				>
					{data.map(({ label, value }) => (
						<Tab
							key={value}
							value={value}
							onClick={() => setActiveTab(value)}
							className={
								activeTab === value
									? "text-main-color text-xs md:text-lg font-Tajawal font-bold transition-all duration-100"
									: "text-xs md:text-lg font-Tajawal"
							}
						>
							{label}
						</Tab>
					))}
				</TabsHeader>

				<div className="flex flex-col-reverse md:flex-row gap-y-4 gap-x-5 mt-10 ">
					<div className="w-full md:w-[60%] opacity-100  mx-auto">
						<TabsBody>
							{data.map(({ value, desc }) => (
								<TabPanel key={value} value={value}>
									{desc}
								</TabPanel>
							))}
						</TabsBody>
					</div>

					<div className="hidden w-full md:w-[40%] lg:flex justify-center">
						<img className="rounded-lg" src={registerImg} alt="صورة التسجيل" />
					</div>
				</div>
			</Tabs>
		</div>
	);
};

export default RegisterSection;
