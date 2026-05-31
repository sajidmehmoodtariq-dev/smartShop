import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import watch from "../../assets/category/watch.png";
import earphone from "../../assets/category/earphone.png";
import vr from "../../assets/category/vr.png";
import macbook from "../../assets/category/macbook.png";

const featured = [
	{
		title: "Connected wear",
		text: "Built for daily movement and a sharper routine.",
		image: watch,
		bg: "from-cyan-500/15 via-slate-50 to-transparent dark:via-white/5",
	},
	{
		title: "Immersive sound",
		text: "Audio that stays crisp in motion, work, and downtime.",
		image: earphone,
		bg: "from-violet-500/15 via-slate-50 to-transparent dark:via-white/5",
	},
	{
		title: "Virtual ready",
		text: "A stronger entry point into immersive product exploration.",
		image: vr,
		bg: "from-sky-500/15 via-slate-50 to-transparent dark:via-white/5",
	},
	{
		title: "Power laptops",
		text: "Portable machines for focused work and creative flow.",
		image: macbook,
		bg: "from-rose-500/15 via-slate-50 to-transparent dark:via-white/5",
	},
];

const Category2 = () => {
	return (
		<section className="container py-8 sm:py-10">
			<div className="mb-6 flex items-end justify-between gap-4">
				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
						Featured categories
					</p>
					<h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
						A slimmer companion grid.
					</h2>
				</div>
				<a href="/shop" className="hidden items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-primary sm:inline-flex">
					See more <FaArrowRight className="text-xs" />
				</a>
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
				{featured.map((item) => (
					<a
						key={item.title}
						href="/shop"
						className={`group overflow-hidden rounded-[1.6rem] border border-black/5 bg-gradient-to-br ${item.bg} p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1 dark:border-white/10`}
					>
						<div className="flex items-start justify-between gap-4">
							<div className="space-y-2">
								<p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500 dark:text-gray-400">
									Category
								</p>
								<h3 className="text-xl font-bold text-gray-900 dark:text-white">
									{item.title}
								</h3>
								<p className="max-w-[14rem] text-sm leading-6 text-gray-600 dark:text-gray-300">
									{item.text}
								</p>
							</div>
							<span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow-sm shadow-black/5 dark:bg-white/10 dark:text-white">
								<FaArrowRight className="text-sm" />
							</span>
						</div>
						<img
							src={item.image}
							alt={item.title}
							className="mt-5 h-28 w-full object-contain transition-transform duration-500 group-hover:scale-105 sm:h-32"
						/>
					</a>
				))}
			</div>
		</section>
	);
};

export default Category2;
