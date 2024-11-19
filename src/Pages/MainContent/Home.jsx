import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import TopBrands from "../../components/TopBrands/TopBrands";
import { useEffect, useState } from "react";
import BrandOnSell from "../../components/BrandOnSell/BrandOnSell";

const Home = () => {
    const data = useLoaderData();
    const [isSellOn, setIsSellOn] = useState([]);
useEffect(()=>{
    const brands = data.filter(item=> item.isSaleOn === true);
    setIsSellOn(brands)
},[data])

    return (
        <div>
            <Banner />
            <div className="w-11/12 sm:w-10/12 mx-auto">
            <TopBrands />

            <BrandOnSell isSellOn={isSellOn} />
            </div>
        </div>
    );
};

export default Home;