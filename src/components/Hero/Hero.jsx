
import ComCarousel from "../carousel/Carousel";
import "./hero.css"
import { useContext } from "react";
import { AuthContext } from "../../Hooks/AuthContext";


const Hero = () => {    
    const {branOnSellRef} = useContext(AuthContext);

    const seeMoreHandler = ()=>{
        if(branOnSellRef.current){
            branOnSellRef.current.scrollIntoView({behavior: "smooth"});
        }
    }
    return (
        <div className='bg-hero lg:bg-no-repeat '>
    <section className="w-10/12 mx-auto relative pt-10 pb-16">
        <div className="absolute inset-x-0 bottom-0 z-10 hidden lg:flex">
            <img className="hidden lg:block max-w-[600px]" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards.png" alt="" />
            <img className="block w-full lg:hidden" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/5/credit-cards-mobile.png" alt="" />
        </div>

        <div className=" relative z-20">
        <div className="hero hero-content justify-between gap-12 md:gap-16 flex-col-reverse lg:flex-row-reverse">
            <div className="w-full lg:w-[40%] bg-black/30 p-2 rounded-xl py-10">
                <ComCarousel />
            </div>
            <div>
            <div className="max-w-xl mx-auto text-center">
                <h1 className="text-3xl font-bold md:text-5xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-100">Save More, Spend Less!</span>
                </h1>
                <p className="mt-5 text-white opacity-80">Discover the best deals, discounts, and coupons to make your shopping smarter and more affordable. Start saving today!</p>

                <button onClick={seeMoreHandler} to="/" className="w-44  items-center px-6 py-4 mt-8 font-bold text-black transition-all duration-200
                 bg-amber-400 hover:bg-amber-500 rounded-lg sm:mt-16 focus:bg-amber-500  inline-block" role="button">
                    <div className="w-full h-full flex gap-2 hover:gap-4 duration-200">
                    <span>See More</span> 
                    <svg className="w-6 h-6 ml-4 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    </div>
                </button>
            </div> 
            </div>
        </div>
        </div>
    </section>
</div>

    )
}
export default Hero;