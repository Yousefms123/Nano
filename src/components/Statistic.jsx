// src/components/StatisticsSection.jsx
import React from "react";
import { CalendarDays, Clock3, Map, Users } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
const stats = [
	{
		id: 4,
		icon: <Users className="w-8 h-8 text-main-color" />,
		number: 800,
		suffix: "+",
		title: "طالب ملتحق",
		description: "في حلقات مركز السبيل القرآني",
	},
	{
		id: 3,
		icon: <Map className="w-8 h-8 text-main-color" />,
		number: 6,
		suffix: "+",
		title: "ولايات",
		description: "تُنشطها برامج المركز التعليمية والدعوية",
	},
	{
		id: 2,
		icon: <Clock3 className="w-8 h-8 text-main-color" />,
		number: 1200,
		suffix: "+",
		title: "ساعة قرآنية",
		description: "تُقدمت بدعم أهل الخير والمساهمين",
	},
	{
		id: 1,
		icon: <CalendarDays className="w-8 h-8 text-main-color" />,
		number: 2018,
		suffix: "",
		title: "تاريخ التأسيس",
		description: "تاريخ تأسيس مركز السبيل القرآني المبارك",
	},
];

const Statistic = () => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
	});
	return (
		<div ref={ref} className="py-12 px-4 bg-white font-Tajawal">
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

						<h3 className="text-2xl font-semibold mb-1">
							{inView ? (
								<CountUp
									end={stat.number}
									duration={3}
									suffix={stat.suffix}
									start={0}
								/>
							) : (
								"0"
							)}
						</h3>

						<p className="text-sm text-gray-600">{stat.description}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Statistic;
