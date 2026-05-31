import Slider from "react-slick";
import Button from '../Shared/Button'
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";

const HeroData = [
    {
        id: 1,
        img: Image1,
        title: "Wireless",
        title2: "Headphones",
        description: "Experience the freedom of wireless audio with our cutting-edge headphones. Immerse yourself in high-quality sound without the hassle of cords.",
        subtitle: "Beats Solo"
    },
    {
        id: 2,
        img: Image2,
        title: "Virtual",
        title2: "Reality",
        description: "Step into a new dimension of sound with our wireless virtual headphones. Enjoy immersive audio and freedom of movement like never before.",
        subtitle: "Beats Solo"
    },
    {
        id: 3,
        img: Image3,
        title: "Personal",
        title2: "Laptop",
        description: "Experience the freedom of wireless connectivity with our cutting-edge laptop. Immerse yourself in high-performance computing without the hassle of cords.",
        subtitle: "Beats Solo"
    }
]

const Hero = () => {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        cssEase: "ease-in-out",
        pauseOnFocus: true
    }

    return (
        <div className="container py-4 sm:py-6">
            <div className="relative overflow-hidden rounded-[2rem] border border-black/5 min-h-[560px] sm:min-h-[680px] hero-bg-color flex items-center justify-center shadow-[0_30px_80px_rgba(15,23,42,0.12)] dark:border-white/10">
                <div className="pointer-events-none absolute -left-16 top-12 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
                <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-amber-400/10 blur-3xl" />
                <div className="container relative z-10 pb-8 sm:pb-0">
                    <Slider {...settings}>
                        {
                            HeroData.map((data) => (
                                <div key={data.id}>
                                    <div className="grid grid-cols-1 items-center gap-8 px-4 py-10 sm:grid-cols-2 sm:gap-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
                                        {/* text content */}
                                        <div className="flex flex-col justify-center gap-5 text-center sm:text-left order-2 sm:order-1 relative z-10 max-w-xl mx-auto sm:mx-0">
                                            <div className="inline-flex w-fit items-center rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary shadow-sm shadow-black/5 dark:bg-white/5 dark:text-primary sm:text-sm">
                                                {data.subtitle}
                                            </div>
                                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-7xl xl:text-8xl">{data.title}</h1>
                                            <h2 className="text-5xl font-bold uppercase tracking-[0.12em] text-gray-900/5 dark:text-white/5 sm:text-7xl lg:text-[7rem] xl:text-[8.5rem] leading-none">{data.title2}</h2>
                                            <p className="mx-auto max-w-md text-sm leading-7 text-gray-600 dark:text-gray-300 sm:mx-0 sm:text-base">
                                                {data.description}
                                            </p>
                                            <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-start">
                                                <Button
                                                    text="Shop By Category"
                                                    bgColor="bg-primary"
                                                    textColor="text-white"
                                                />
                                                <a
                                                    href="/shop"
                                                    className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-8 py-2 font-semibold text-gray-700 shadow-sm shadow-black/5 transition-transform duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary dark:border-white/10 dark:bg-white/5 dark:text-gray-200"
                                                >
                                                    Explore Products
                                                </a>
                                            </div>
                                        </div>
                                        {/* img section */}
                                        <div className="order-1 sm:order-2 relative flex items-center justify-center">
                                            <div className="absolute inset-x-8 bottom-10 h-24 rounded-full bg-black/10 blur-2xl dark:bg-black/20" />
                                            <div className="relative mx-auto flex w-full max-w-[360px] items-center justify-center sm:max-w-[480px]">
                                                <div className="absolute inset-10 rounded-[2rem] bg-gradient-to-br from-white/70 to-white/20 shadow-2xl shadow-black/10 backdrop-blur-sm dark:from-white/10 dark:to-white/5" />
                                                <img src={data.img} alt={data.title}
                                                    className="relative z-10 h-[300px] w-full object-contain px-4 sm:h-[420px] sm:scale-105 lg:h-[470px] lg:scale-110 drop-shadow-[0_25px_40px_rgba(0,0,0,0.25)]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Hero