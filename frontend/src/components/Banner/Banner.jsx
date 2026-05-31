import React from "react";
import Button from "../Shared/Button";

const Banner = ({ data }) => {
	return (
		<section className="container py-8 sm:py-12 lg:py-14">
			<div
				className="relative overflow-hidden rounded-[2rem] border border-black/5 px-6 py-8 shadow-[0_22px_70px_rgba(15,23,42,0.12)] sm:px-10 sm:py-10 dark:border-white/10"
				style={{ backgroundColor: data.bgColor }}
			>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_35%)]" />
				<div className="relative grid items-center gap-8 lg:grid-cols-2">
					<div className="space-y-4 text-white">
						<div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em]">
							{data.discount}
						</div>
						<p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/75">
							{data.title}
						</p>
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
							{data.title2}
						</h2>
						<p className="max-w-xl text-sm leading-7 text-white/85 sm:text-base">
							{data.title4}
						</p>
						<div className="pt-2">
							<Button text="Shop Now" bgColor="bg-white" textColor="text-gray-900" />
						</div>
					</div>

					<div className="relative flex items-center justify-center lg:justify-end">
						<img
							src={data.image}
							alt={data.title2}
							className="relative z-10 w-full max-w-[360px] object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.22)] sm:max-w-[420px]"
						/>
						<div className="absolute bottom-0 h-24 w-24 rounded-full bg-white/20 blur-3xl" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
