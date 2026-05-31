import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Category from "../Category/Category";
import Category2 from "../Category/Category2";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Blogs from "../Blogs/Blogs";
import Partners from "../Partners/Partners";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import headphone from "../../assets/hero/headphone.png";
import smartwatch2 from "../../assets/category/smartwatch2-removebg-preview.png";
import { products } from "../../data/products";

const BannerData = {
	discount: "30% OFF",
	title: "Fine Smile",
	date: "10 Jan to 28 Jan",
	image: headphone,
	title2: "Air Solo Bass",
	title3: "Winter Sale",
	title4:
		"Premium sound with bold design, built to keep up with long sessions and everyday listening.",
	bgColor: "#f42c37",
};

const BannerData2 = {
	discount: "30% OFF",
	title: "Happy Hours",
	date: "14 Jan to 28 Jan",
	image: smartwatch2,
	title2: "Smart Solo",
	title3: "Winter Sale",
	title4:
		"A clean, connected smartwatch built for quick checks, better focus, and a more active day.",
	bgColor: "#2dcc6f",
};

const MainPage = ({ orderPopup, handleOrderPopup }) => {
	return (
		<>
			<Navbar handleOrderPopup={handleOrderPopup} />
			<Hero handleOrderPopup={handleOrderPopup} />
			<Category />
			<Category2 />
			<Services />
			<Banner data={BannerData} />
			<Products products={products.slice(0, 6)} />
			<Banner data={BannerData2} />
			<Blogs />
			<Partners />
			<Footer />
			<Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} />
		</>
	);
};

export default MainPage;