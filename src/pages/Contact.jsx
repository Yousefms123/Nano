import React from "react";
import ContactForm from "../components/ContactForm";
import DynamicBreadcrumbs from "../components/DynamicBreadcrumbs";
import { CiMail } from "react-icons/ci";
import { PiPhoneCall } from "react-icons/pi";
const Contact = () => {
	return (
		<div className="mt-20 p-4 font-Tajawal">
			<div className="  mx-auto ">
				<div className="lg:ms-28">
					<DynamicBreadcrumbs />
				</div>
				{/* الخطوة 3: استخدام المكون وتمرير البيانات إليه */}

				<div className="space-y-8 mt-16">
					<ContactForm />
				</div>
				<div className="lg:px-28 mt-16 flex flex-wrap items-center gap-x-9 gap-y-4">
					<div className="flex items-center gap-x-3">
						<span className="bg-main-color/25 p-4 rounded-full">
							<PiPhoneCall className=" text-main-color lg:text-2xl font-bold" />
						</span>
						<span className="text-gray-700 text-base lg:text-2xl">92009423</span>
					</div>
					<div className="flex items-center gap-x-3">
						<span className="bg-main-color/25 p-4 rounded-full">
							<CiMail className=" text-main-color text-base lg:text-2xl font-bold" />
						</span>
						<span className="text-gray-700 text-base lg:text-2xl">contact@qurannaeeb.com</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
