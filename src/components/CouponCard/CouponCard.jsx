/* eslint-disable react/prop-types */
const CouponCard = ({coupon}) => {
    const {condition, coupon_code, coupon_type, description, expiry_date} = coupon;
    
    return (
        <div className="grid grid-cols-3 min-h-36 text-gray-400 ">
            <div className="col-span-2  rounded-r-2xl rounded-md bg-yellow-50 shadow-lg relative  border border-r-0 border-amber-200 overflow-hidden">
            <div className="absolute right-0 top-0 h-[calc(100%-30%)] border-amber-300 mt-6 border-r-[1.5px] border-dashed "></div>
            <div className="relative p-2">
            <p className="font-black text-xl z-10 mt-10 ml-5">{condition}</p>
            <p className="absolute -rotate-45 -left-6 top-5 font-bold px-4 bg-white z-0">{expiry_date}</p>
            <p className="ml-5 mb-5">{description}</p>
            </div>
            </div>
            <div className=" rounded-l-2xl rounded-md bg-yellow-50 shadow-lg border border-l-0 border-amber-200 flex flex-col justify-center items-center gap-10">
            <p className="font-bold text-lg">{coupon_type}</p>
                <button className="btn btn-sm btn-outline bg-amber-200 hover:bg-amber-300 hover:text-gray-600 focus:-rotate-[20deg] border-amber-300 hover:border-amber-400">Copy Code</button>
            </div>
        </div>
    );
};

export default CouponCard;