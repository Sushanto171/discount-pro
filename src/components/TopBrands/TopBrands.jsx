import Marquee from "react-fast-marquee";
import { Link, useLoaderData } from "react-router-dom";

const TopBrands = () => {
const data = useLoaderData();

    return (
        <div className="flex  my-12 bg-blue-100 p-2">
            <p className="bg-yellow-400 px-6 py-2 w-36 shadow-md font-semibold">Top Brands</p>
            <Marquee pauseOnHover={true}>
              {
                data.map(topBrand => <li className="list-none mx-5" key={topBrand._id}><Link to={`brand/${topBrand._id}`}><img className="w-12" src={topBrand.brand_logo}/></Link></li>)
              }
              {
                data.map(topBrand => <li className="list-none mx-5" key={topBrand._id}><Link to={`brand/${topBrand._id}`}><img className="w-12" src={topBrand.brand_logo}/></Link></li>)
              }
              {
                data.map(topBrand => <li className="list-none mx-5" key={topBrand._id}><Link to={`brand/${topBrand._id}`}><img className="w-12" src={topBrand.brand_logo}/></Link></li>)
              }
            </Marquee>
        </div>
    );
};

export default TopBrands;