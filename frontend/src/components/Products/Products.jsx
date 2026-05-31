import React from "react";
import Heading from "../Shared/Heading";
import ProductCard from "./ProductCard";
import p1 from "../../assets/product/p-1.jpg";
import p2 from "../../assets/product/p-2.jpg";
import p3 from "../../assets/product/p-3.jpg";
import p4 from "../../assets/product/p-4.jpg";
import p5 from "../../assets/product/p-5.jpg";
import p7 from "../../assets/product/p-7.jpg";

const products = [
	{ image: p1, title: "Modern Headset", subtitle: "Crystal clarity", price: "$120", category: "Audio" },
	{ image: p2, title: "Daily Companion", subtitle: "Built for movement", price: "$90", category: "Wearables" },
	{ image: p3, title: "Pro Watch", subtitle: "Smart tracking", price: "$135", category: "Wearables" },
	{ image: p4, title: "Gaming Core", subtitle: "Responsive control", price: "$160", category: "Gaming" },
	{ image: p5, title: "Focused Audio", subtitle: "Deep bass profile", price: "$110", category: "Audio" },
	{ image: p7, title: "Portable Power", subtitle: "Work anywhere", price: "$155", category: "Laptop" },
];

const Products = () => {
	return (
		<section className="container py-10 sm:py-14 lg:py-16">
			<Heading
				title="Popular products"
				subtitle="A curated mix of standout items with a clean, premium presentation."
			/>
			<div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
				{products.map((product) => (
					<ProductCard key={product.title} product={product} />
				))}
			</div>
		</section>
	);
};

export default Products;
