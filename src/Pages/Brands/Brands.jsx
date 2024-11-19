import { FaSearch } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import BrandsCard from "../../components/BrandsCard/BrandsCard";

const Brands = () => {
    const data = useLoaderData();

    return (
        <div className="w-11/12 sm:w-10/12 mx-auto">
                {/* search Bar */}
                <div className="sm:flex justify-between my-5 flex-row-reverse gap-8 items-end">
                <div className="relative w-8/12 md:w-4/12 min-w-52 sm:mx-auto md:mr-0">
                <span className="absolute top-[2.5px] left-[2.5px]  bg-base-300 w-14 h-11 rounded-l-full flex pl-4 justify-start items-center">
                <FaSearch size={20} />
                </span>
                    <input type="search" className="border w-full py-3 pr-[49px] pl-16 rounded-full outline-none border-black shadow-md bg-base-200 border-transparent
                     focus:bg-white hover:bg-white hover:border-black duration-200" />
                    <button className="absolute right-2 top-2 btn btn-sm rounded-full bg-black/80 hover:bg-black font-semibold text-white w-14 ">Go</button>
                </div>
                <div>
                    <h3 className="font-bold mt-4 sm:mt-0 text-2xl sm:text-3xl text-black/80">Explore Your Favorite Store</h3>
                </div>
                </div>
                <div className="space-y-8 mt-16">
                    {
                        data.map(brand => <BrandsCard key={brand._id} brand={brand} />)
                    }
                </div>
        </div>
    );
};

export default Brands;