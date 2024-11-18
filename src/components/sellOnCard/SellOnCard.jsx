
const SellOnCard = (props) => {
    const {item} = props || {};
    const {brand_logo, brand_name, category, coupons} = item;
    console.log(item)
    return (
        <div className="card bg-blue-50 border hover:shadow-md pt-5 duration-300">
        <figure className="p-3 h-20">
            <img
            src={brand_logo}
            alt={brand_name} />
        </figure>
        <div className="card-body px-5">
            <h2 className="card-title flex-col sm:flex-row">
            {brand_name}
            <div className="badge badge-secondary bg-amber-400 border-none text-xs flex gap-0.5">Coupons:<span> {coupons.length}</span></div>
            </h2>
            <p className="text-sm">Category : {category}</p>
        </div>
        </div>
    );
};

export default SellOnCard;