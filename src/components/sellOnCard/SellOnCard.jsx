import { Link } from "react-router-dom";

const SellOnCard = (props) => {
    const {item} = props || {};
    const {brand_logo, brand_name, category, coupons} = item;
    return (
       <Link to={`/brands`}>
        <div  className="card bg-blue-50 border hover:shadow-md pt-5 duration-300 h-full">
        <figure className="p-3 h-20">
            <img
            src={brand_logo}
            alt={brand_name} />
        </figure>
        <div className="px-2 py-4">
            <h2 className="card-title flex-col sm:flex-row">
            {brand_name}
            <div className="rounded-full badge-secondary px-2 bg-amber-300 border-none text-[10px] flex gap-0.5">Coupons:<span> {coupons.length}</span></div>
            </h2>
            <p className="text-sm text-center lg:text-left">Category : {category}</p>
        </div>
        </div>
       </Link>
    );
};

export default SellOnCard;