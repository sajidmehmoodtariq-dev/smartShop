import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="border-t border-black/5 bg-gray-950 text-white dark:border-white/10">
			<div className="container py-12 sm:py-16">
				<div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
					<div className="space-y-4">
						<a href="/" className="inline-flex items-center gap-2 text-2xl font-bold tracking-[0.2em] uppercase text-white">
							<span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm">S</span>
							SmartShop
						</a>
						<p className="max-w-md text-sm leading-7 text-white/70">
							A polished e-commerce storefront focused on smart tech, modern products, and a smoother browsing experience.
						</p>
						<div className="flex items-center gap-3 text-white/80">
							{[FaFacebookF, FaInstagram, FaXTwitter, FaYoutube].map((Icon, index) => (
								<a
									key={index}
									href="/"
									className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-primary hover:text-white"
								>
									<Icon className="text-sm" />
								</a>
							))}
						</div>
					</div>

					<div>
						<h3 className="mb-4 text-lg font-bold">Quick Links</h3>
						<ul className="space-y-3 text-sm text-white/70">
							{['Home', 'Shop', 'About', 'Blog'].map((item) => (
								<li key={item}><a href="/" className="transition hover:text-white">{item}</a></li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="mb-4 text-lg font-bold">Support</h3>
						<ul className="space-y-3 text-sm text-white/70">
							{['Contact', 'FAQ', 'Shipping', 'Returns'].map((item) => (
								<li key={item}><a href="/" className="transition hover:text-white">{item}</a></li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="mb-4 text-lg font-bold">Newsletter</h3>
						<p className="mb-4 text-sm leading-7 text-white/70">
							Get product drops, useful picks, and offers without clutter.
						</p>
						<div className="flex rounded-full border border-white/10 bg-white/5 p-1">
							<input
								type="email"
								placeholder="Email address"
								className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none"
							/>
							<button className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white">
								Join
							</button>
						</div>
					</div>
				</div>

				<div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
					© 2026 SmartShop. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
