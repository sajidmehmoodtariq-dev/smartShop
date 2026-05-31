import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";

const MenuLinks = [
    {
        id: 1,
        name: 'Home',
        link: '/'
    },
    {
        id: 2,
        name: 'Shop',
        link: '/shop'
    },
    {
        id: 3,
        name: 'About',
        link: '/about'
    },
    {
        id: 4,
        name: 'Blog',
        link: '/blog'
    },
    {
        id: 5,
        name: 'Contact',
        link: '/contact'
    }
]

const DropdownLinks = [
    {
        id: 1,
        name: 'Trending',
        link: '/trending'
    },
    {
        id: 2,
        name: 'Best Sellers',
        link: '/orders'
    },
    {
        id: 3,
        name: 'Top Rated',
        link: '/top-rated'
    }
]



const Navbar = ({ handleOrderPopup = () => {} }) => {
    const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);

    return (
        <div className='sticky top-0 z-[999] border-b border-black/5 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/85 dark:text-white duration-200 isolate'>
            <div className="py-3 sm:py-4">
                <div className='container flex items-center justify-between gap-4'>
                    {/* logo and links section */}
                    <div className='flex items-center gap-3 sm:gap-4' >
                        <a
                            href="/"
                            className='inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-3 py-2 text-primary font-semibold tracking-[0.22em] text-sm uppercase shadow-sm shadow-primary/5 transition-transform duration-200 hover:-translate-y-0.5 sm:text-base'
                        >
                            <span className='flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm tracking-normal'>S</span>
                            SmartShop
                        </a>
                        {/* Menu Items */}
                        <div className='hidden lg:block'>
                            <ul className='flex items-center gap-1 xl:gap-2 ' >
                                {
                                    MenuLinks.map((data, index) => (
                                        <li key={index} className=''>
                                            <a
                                                href={data.link}
                                                className='relative inline-flex px-3 py-2 text-sm font-semibold text-gray-500 transition-colors duration-200 hover:text-black dark:hover:text-white after:absolute after:inset-x-3 after:bottom-0 after:h-[2px] after:origin-left after:scale-x-0 after:rounded-full after:bg-primary after:transition-transform after:duration-200 hover:after:scale-x-100'
                                            >
                                                {data.name}</a>
                                        </li>
                                    ))}
                                    {/* dropdown */}
                                    <li className="relative cursor-pointer py-2">
                                        <button
                                            type="button"
                                            onClick={() => setIsQuickLinksOpen((prev) => !prev)}
                                            className="flex items-center gap-[2px] px-3 py-2 text-sm font-semibold text-gray-500 transition-colors duration-200 hover:text-black dark:hover:text-white"
                                            aria-expanded={isQuickLinksOpen}
                                            aria-haspopup="menu"
                                        >
                                            Quick Links
                                            <span>
                                                <FaCaretDown className={`${isQuickLinksOpen ? 'rotate-180' : ''} duration-300`} />
                                            </span>
                                        </button>
                                        <ul className={`absolute left-0 top-full z-[1000] w-[220px] space-y-1 rounded-2xl border border-black/5 bg-white/95 p-2 shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-200 dark:border-white/10 dark:bg-gray-900/95 ${isQuickLinksOpen ? 'visible opacity-100 pointer-events-auto' : 'invisible opacity-0 pointer-events-none'}`}>
                                                {
                                                    DropdownLinks.map((data) => (
                                                        <li key={data.id}>
                                                            <a href={data.link} className='block rounded-xl px-3 py-2 text-sm text-gray-500 hover:bg-primary/10 hover:text-black dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white duration-200'>
                                                                {data.name}
                                                            </a>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                    </li>
                                
                            </ul>
                        </div>
                    </div>
                    {/* Navbar right section */}

                    <div className='flex items-center justify-between gap-2 sm:gap-4' >
                        {/* search bar */}
                        <div className='relative group hidden sm:block'>
                            <input type="text" placeholder="Search..." className='search-bar' />
                            <IoIosSearch className='text-xl group-hover:text-primary dark:text-gray-400 text-gray-600 absolute right-3 top-1/2 -translate-y-1/2 duration-200' />
                        </div>
                        {/* Order button  */}
                        <button onClick={handleOrderPopup} className='relative rounded-full border border-black/5 bg-white p-3 shadow-sm shadow-black/5 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-gray-900 sm:p-3.5'>
                            <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-300' />
                            <div className='w-4 h-4 bg-primary text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-[10px] font-semibold shadow-sm' >
                                4
                            </div>
                        </button>
                        
                        {/* dark Mode section */}
                        <DarkMode />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar