import React from "react";
import { X, Info } from "lucide-react"; // استخدام أيقونات X و Info
import MainButton from "./Button";
import Aboutimg1 from "../assets/Aboutimg1.png";
import OurMission from "../assets/our-mission.png";
import Contribute from "../assets/contribute.png";
import { HandCoins, Star, CalendarDays, BookOpen } from "lucide-react";

const goalsData = [
	{
		icon: <BookOpen size={40} className="text-red-900" />,
		text: "تعليم العقيدة، والفقه، والتفسير بأسلوب بسيط",
	},
	{
		icon: <CalendarDays size={40} className="text-red-900" />,
		text: "توفير دروس ومحاضرات بالصوت والصورة",
	},
	{
		icon: <Star size={40} className="text-red-900" />,
		text: "دعم المشاريع التعليمية للفتيات والناشئة",
	},
	{
		icon: <HandCoins size={40} className="text-red-900" />,
		text: "فتح باب التبرع للمشاركة في الأجر والثواب",
	},
];

// مكون فرعي لكل بطاقة هدف
const GoalCard = ({ icon, text }) => {
	return (
		<div className="flex flex-col items-center gap-4 text-center">
			<div className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-md">
				{icon}
			</div>
			<p className="font-semibold text-white max-w-xs">{text}</p>
		</div>
	);
};

const AboutSection = () => {
	return (
		<section>
			<div className="flex flex-col lg:flex-row  justify-between gap-10 p-4 md:px-20 lg:px-28">
				<div className="flex flex-col items-center lg:items-start text-center lg:text-right w-full lg:w-1/2 order-2 lg:order-1">
					<h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">نبذة عنا</h1>
					<p className="text-base md:text-lg lg:text-xl leading-relaxed lg:leading-9 mb-6">
						مركز السيب القرآني هو مؤسسة تعليمية تهدف إلى نشر وتعليم كتاب الله لجميع الفئات
						العمرية، من الأطفال إلى الكبار.
					</p>
					<p className="text-base md:text-lg lg:text-xl leading-relaxed lg:leading-9 mb-6">
						نسعى في المركز إلى توفير بيئة محفزة ومناسبة لحفظ وتدبر القرآن الكريم، باستخدام
						أساليب تعليمعم الحفظ والفهم والتطبيق العملي للقرآن الكريم في حياة الطالب اليومية.
					</p>
					<p className="text-base md:text-lg lg:text-xl leading-relaxed lg:leading-9 mb-6">
						كما نسعى إلى توسيع نطاق التأثير المجتمعي من خلال الشراكات، والمبادرات الخيرية،
						والأنشطة التي تعزز القيم القرآنية في المجتمع. رؤيتنا أن نكون منارة تعليمية رائدة في
						تعليم القرآن الكريم، تساهم في بناء جيل واعٍ بقيمه ودينه.
					</p>
					<MainButton
						to={"/contact"}
						className="text-center bg-main-color w-1/2 max-w-xs text-white px-4 py-2  md:px-6 md:py-3 rounded-full text-lg lg:text-xl"
					>
						تواصل معنا
					</MainButton>
				</div>

				<div className="w-[100%]  md:w-[100%] lg:w-1/2 order-1 lg:order-2">
					<img
						className="rounded-lg w-[100%] h-full object-cover"
						src={Aboutimg1}
						alt="نبذة عن مركز السيب القرآني"
					/>
				</div>
			</div>
			<div className="flex flex-col-reverse lg:flex-row  justify-between gap-10 p-4 mt-16 md:px-20 lg:px-28">
				<div className="flex flex-col items-center lg:items-start text-center lg:text-right w-full lg:w-1/2 order-1 lg:order-2">
					<h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">رسالتنا</h1>
					<p className="text-base md:text-lg lg:text-xl leading-relaxed lg:leading-9 mb-6">
						نُقدّم محتوى إسلامياً نقيّاً، يربط المسلم بربّه، ويقوي صلته بالقرآن والسنة، بعيدًا
						عن التعقيد أو التمييع.
					</p>
					<p className="text-base md:text-lg lg:text-xl leading-relaxed lg:leading-9 mb-6">
						نؤمن أن العلم الشرعي حق لكل مسلم، وأن التبرع لنشره هو صدقة جارية لا تنقطع.
					</p>
					<p className="text-base md:text-lg lg:text-xl leading-relaxed lg:leading-9 mb-6">
						عى لتقديم برامج تعليمية ودعوية ذات جودة عالية، تشمل مقاطع مرئية، دروس مباشرة،
						ومقالات علمية مبسطة. رؤيتنا أن نكون منبرًا يُعيد للمسلمين صلتهم الأصيلة بدينهم،
						ويوفر لهم بيئة آمنة وموثوقة لتعلم الدين من مصادره الصحيحة.
					</p>
					<MainButton
						to={"/contact"}
						className="text-center bg-main-color w-1/2 max-w-xs text-white px-4 py-2  md:px-6 md:py-3 rounded-full text-lg lg:text-xl"
					>
						تواصل معنا
					</MainButton>
				</div>

				<div className="w-[100%]  md:w-[100%] lg:w-1/2 order-2 lg:order-1">
					<img
						className="rounded-lg w-[100%] h-full object-cover"
						src={OurMission}
						alt="نبذة عن مركز السيب القرآني"
					/>
				</div>
			</div>
			<section className="bg-main-color/50 py-16 flex flex-wrap  ">
				<div className="w-4/5  lg:w-3/4 flex flex-col items-center justify-center mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">أهدافنا</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
						{goalsData.map((goal, index) => (
							<GoalCard key={index} icon={goal.icon} text={goal.text} />
						))}
					</div>
				</div>
			</section>
			<div className="flex flex-col lg:flex-row  justify-between gap-10 p-4 mt-16 md:px-20 lg:px-28">
				<div className="flex flex-col gap-y-3 md:gap-y-11 items-center lg:items-start text-center lg:text-right w-full lg:w-1/2 order-2 lg:order-1">
					<h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">كيف يمكنك المساهمة؟</h1>
					<ul className="font-Tajawal list-disc">
						<li className="text-lg md:text-lg lg:text-3xl text-gray-800 leading-relaxed lg:leading-9 mb-6">
							بالدعاء لنا{" "}
						</li>
						<li className="text-lg md:text-lg lg:text-3xl text-gray-800 leading-relaxed lg:leading-9 mb-6">
							بنشر المحتوى{" "}
						</li>
						<li className="text-lg md:text-lg lg:text-3xl text-gray-800 leading-relaxed lg:leading-9 mb-6">
							بالتبرع لدعم مشاريعنا (التعليمية والدعوية){" "}
						</li>
					</ul>
					<p className="font-Amiri text-lg md:text-lg lg:text-3xl">
						قال ﷺ:"إذا مات ابن آدم انقطع عمله إلا من ثلاث: صدقة جارية أو علم يُنتفع به...
					</p>
					<MainButton
						to={"/donate"}
						className="text-center bg-button w-1/2 max-w-xs text-white px-4 py-2  md:px-6 md:py-3 rounded-full text-lg lg:text-xl"
					>
						تبرع من هنا
					</MainButton>
				</div>

				<div className="w-[100%]  md:w-[100%] lg:w-1/2 order-1 lg:order-2">
					<img
						className="rounded-lg w-[100%] h-full object-cover"
						src={Contribute}
						alt="نبذة عن مركز السيب القرآني"
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
