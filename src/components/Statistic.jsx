// src/components/StatisticsSection.jsx
import React from "react";
import { CalendarDays, Clock3, Map, Users } from "lucide-react";

const stats = [
	{
		id: 4,
		icon: <Users className="w-8 h-8 text-main-color" />,
		title: "+800 طالب ملتحق",
		description: "في حلقات مركز السبيل القرآني",
	},
	{
		id: 3,
		icon: <Map className="w-8 h-8 text-main-color" />,
		title: "6+ ولايات",
		description: "تُنشطها برامج المركز التعليمية والدعوية",
	},
	{
		id: 2,
		icon: <Clock3 className="w-8 h-8 text-main-color" />,
		title: "+1,200 ساعة قرآنية",
		description: "تُقدمت بدعم أهل الخير والمساهمين",
	},
	{
		id: 1,
		icon: <CalendarDays className="w-8 h-8 text-main-color" />,
		title: "منذ 2018",
		description: "تاريخ تأسيس مركز السبيل القرآني المبارك",
	},
];

const Statistic = () => {
	return (
		<div className="py-12 px-4 bg-white font-Tajawal">
			<h2 className="text-2xl md:text-3xl font-bold text-center mb-10">ارقام واحصائيات</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
				{stats.map((stat) => (
					<div
						key={stat.id}
						className="border rounded-xl p-6 text-center shadow-sm hover:shadow-md transition duration-300"
					>
						<div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-main-color/10">
							{stat.icon}
						</div>
						<h3 className="text-lg font-semibold mb-1">{stat.title}</h3>
						<p className="text-sm text-gray-600">{stat.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Statistic;
