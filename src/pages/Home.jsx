import Brand from "../components/Brand";
import DonationCard from "../components/Cards";
import { CarouselWithContent } from "../components/Carousel";
import DonationChance from "../components/DontationChance";
import Statistic from "../components/Statistic";
import EnrollmentSection from "../components/EnrollmentSection";

import enrollment from "../assets/enrollment.png";
import TrendingAds from "../components/TrendingAds";

const Home = () => {
	return (
		<div>
			<Brand />
			<TrendingAds />
			<DonationCard />
			<CarouselWithContent />
			<Statistic />
			<DonationChance />
			<div className="w-[90vw] mx-auto font-Tajawal mt-10">
				<h1 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-gray-900 font-Tajawal">
					تسجيل طالب
				</h1>
				<EnrollmentSection
					title="حلقات التحفيظ"
					descriptionParagraphs={[
						"حلقات قرآنية مخصصة لجميع الأعمار، تحت إشراف نخبة من المعلمين المؤهلين، وفي بيئة تربوية راقية.",
						"اغتنم الفرصة وسجّل ابنك في بيئة قرآنية تربوية تُنمّي شخصيته وتغرس في قلبه حب القرآن الكريم.",
					]}
					buttonText="تسجيل طالب"
					imageUrl={enrollment}
					imageAlt="صورة لأطفال يدرسون القرآن"
				/>
			</div>
		</div>
	);
};

export default Home;
