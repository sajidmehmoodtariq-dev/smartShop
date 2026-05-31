import React from "react";
import Heading from "../Shared/Heading";
import blog1 from "../../assets/blogs/blog-1.jpg";
import blog2 from "../../assets/blogs/blog-2.jpg";
import blog3 from "../../assets/blogs/blog-3.jpg";

const blogs = [
	{
		image: blog1,
		date: "12 Mar, 2026",
		title: "How to choose gear that actually fits your routine",
		text: "A quick guide to picking products that solve a real day-to-day need instead of adding clutter.",
	},
	{
		image: blog2,
		date: "24 Mar, 2026",
		title: "The difference between premium and just expensive",
		text: "The details that matter most when you want a refined experience that lasts.",
	},
	{
		image: blog3,
		date: "08 Apr, 2026",
		title: "Why the best shopping layouts feel editorial",
		text: "Structure, spacing, and hierarchy can make product browsing feel faster and more confident.",
	},
];

const Blogs = () => {
	return (
		<section className="container py-10 sm:py-14 lg:py-16">
			<Heading
				title="Latest from the blog"
				subtitle="Short reads that keep the storefront feeling informed and fresh."
			/>
			<div className="grid gap-5 lg:grid-cols-3">
				{blogs.map((blog) => (
					<article
						key={blog.title}
						className="overflow-hidden rounded-[1.6rem] border border-black/5 bg-white/80 shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:border-white/10 dark:bg-gray-900/80"
					>
						<img src={blog.image} alt={blog.title} className="h-56 w-full object-cover" />
						<div className="space-y-3 p-5">
							<p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
								{blog.date}
							</p>
							<h3 className="text-xl font-bold text-gray-900 dark:text-white">
								{blog.title}
							</h3>
							<p className="text-sm leading-7 text-gray-600 dark:text-gray-300">
								{blog.text}
							</p>
							<a href="/blog" className="inline-flex text-sm font-semibold text-primary">
								Read more
							</a>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default Blogs;
