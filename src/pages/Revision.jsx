import React from "react";
import DynamicBreadcrumbs from "../components/DynamicBreadcrumbs";
import { RevesionForm } from "../components/RevesionForm";
const Revision = () => {
	return (
		<div className="mt-20 p-4 font-Tajawal">
			<div className="  mx-auto ">
				<div className="lg:ms-28">
					<DynamicBreadcrumbs />
				</div>
				{/* الخطوة 3: استخدام المكون وتمرير البيانات إليه */}

				<div className="space-y-8 mt-16">
					<h1 className="text-lg md:text-xl lg:text-3xl font-bold">المراجعات</h1>
					<RevesionForm />
				</div>
			</div>
		</div>
	);
};

export default Revision;
