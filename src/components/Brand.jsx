import heroImg from "../assets/hero-img.png";
import Ramadan from "../assets/Ramadan.png";
import Button from "./Button";

const Brand = () => {
	return (
		<div
			className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[url] flex items-center justify-center"
			style={{ backgroundImage: `url(${heroImg})` }}
		>
			<div className=" text-white text-2xl flex flex-col items-center justify-center gap-y-6">
				<p className="font-Amiri md:text-4xl ">" اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ "</p>
				<div className="flex gap-4">
					<img src={Ramadan} alt="" className="hidden" />
					<h1 className="text-4xl md:text-6xl lg:text7xl font-bold font-Tajawal">
						مركز السيب القرآني
					</h1>
					<img src={Ramadan} alt="" className="hidden transform rotate-180" />
				</div>
				<p className="text-white text-2xl lg:text-4xl font-Tajawal">
					حيث نغرس نور القرآن في قلوب الأجيال
				</p>
				<div className="flex flex-col md:flex-row lg:flex-row gap-4 items-center md:justify-center mt-3 w-full p-2 font-Tajawal">
					<Button
						to={"/donate"}
						className="text-base md:text-xl bg-button hover:bg-blue-900 rounded-full px-6 py-4 w-full"
					>
						كن فاعل خير
					</Button>
					<Button
						to={"/register"}
						className="text-base md:text-xl border rounded-full px-6 py-4 w-full"
					>
						انضم إلينا
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Brand;
