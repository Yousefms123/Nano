import React from "react";
import DynamicBreadcrumbs from "../components/DynamicBreadcrumbs";
import AboutSection from "../components/AboutSection"; // <-- الخطوة 1: استيراد المكون الجديد

const About = () => {
	return (
		<div className="mt-20 p-4 font-Tajawal">
			<div className="  mx-auto ">
				<div className="lg:ms-28">
					<DynamicBreadcrumbs />
				</div>
				{/* الخطوة 3: استخدام المكون وتمرير البيانات إليه */}
				<div className="space-y-8 mt-16">
					<AboutSection />
				</div>
			</div>
		</div>
	);
};
export default About;
