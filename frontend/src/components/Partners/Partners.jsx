import React from "react";
import brand1 from "../../assets/brand/br-1.png";
import brand2 from "../../assets/brand/br-2.png";
import brand3 from "../../assets/brand/br-3.png";
import brand4 from "../../assets/brand/br-4.png";
import brand5 from "../../assets/brand/br-5.png";

const brands = [brand1, brand2, brand3, brand4, brand5];

const Partners = () => {
	return (
		<section className="container py-8 sm:py-12">
			<div className="rounded-[1.75rem] border border-black/5 bg-white/70 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-gray-900/70">
				<div className="mb-4 text-center sm:mb-6">
					<p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
						Trusted by brands
					</p>
					<h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
						A small wall of familiar marks.
					</h2>
				</div>

				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
					{brands.map((brand, index) => (
						<div
							key={index}
							className="flex items-center justify-center rounded-[1.2rem] border border-black/5 bg-white/80 p-4 grayscale transition duration-300 hover:grayscale-0 dark:border-white/10 dark:bg-white/5"
						>
							<img src={brand} alt={`brand-${index + 1}`} className="h-8 object-contain" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Partners;
