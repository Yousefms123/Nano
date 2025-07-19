import React from "react";
import RegisterSection from "../components/RegisterSection";
import DynamicBreadcrumbs from "../components/DynamicBreadcrumbs";

const Register = () => {
	return (
		<div className="mt-20 p-4 font-Tajawal">
			<div className="  mx-auto ">
				<div className="lg:ms-28">
					<DynamicBreadcrumbs />
				</div>
				{/* الخطوة 3: استخدام المكون وتمرير البيانات إليه */}

				<div className="space-y-8 mt-16">
					<RegisterSection />
				</div>
			</div>
		</div>
	);
};

export default Register;
