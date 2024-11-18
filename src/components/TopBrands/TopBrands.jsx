import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";

const TopBrands = () => {
const data = useLoaderData();
const [topBrands, setTopBrands] = useState([]);
useEffect(()=>{
    const brands = data.filter(item=> item.isSaleOn === true);
    setTopBrands(brands)
},[data])

console.log(data , topBrands)
    return (
        <div className="flex w-11/12 sm:w-10/12 mx-auto my-12 bg-blue-100 p-2">
            <p className="bg-yellow-400 px-6 py-2 w-36 shadow-md font-semibold">Top Brands</p>
            <Marquee pauseOnHover={true}>
              {
                topBrands.map(topBrand => <li className="list-none mx-5" key={topBrand._id}><Link to={`brands/${topBrand.brand_name}`}><img className="w-12" src={topBrand.brand_logo}/></Link></li>)
              }
              {
                topBrands.map(topBrand => <li className="list-none mx-5" key={topBrand._id}><Link to={`brands/${topBrand.brand_name}`}><img className="w-12" src={topBrand.brand_logo}/></Link></li>)
              }
              {
                topBrands.map(topBrand => <li className="list-none mx-5" key={topBrand._id}><Link to={`brands/${topBrand.brand_name}`}><img className="w-12" src={topBrand.brand_logo}/></Link></li>)
              }
            </Marquee>
        </div>
    );
};

export default TopBrands;