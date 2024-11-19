/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { Link,  } from "react-router-dom";

const BrandsCard = ({brand}) => {
    const {brand_logo, brand_name, description, rating,isSaleOn, _id} =brand;
 
  
  return (
<div>
<div className="sm:flex justify-between p-4 min-h-36 bg-white shadow-lg rounded-lg border gap-8
 border-gray-200 hover:shadow-2xl transition-all duration-300">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-5">
        <img
          src={brand_logo}
          alt={brand_name}
          className="w-20 h-20 object-contain"
        />
            <div className="flex items-center text-yellow-500">
                <p className="text-black"> rating:</p>
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < Math.round(rating)
                      ? "fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
      </div>

      {/* Middle Section */}
        <div className="text-center flex flex-col gap-2">
          <h2 className="text-xl font-semibold">
            {brand_name}
          </h2>
          <p className="text-sm text-gray-500">{description}</p>
        </div>

      {/* Bottom Section */}
      <div>
      {isSaleOn && (
        <p className="mt-4 text-red-500 text-center font-semibold animate-bounce">
          Sale is On!
        </p>
      )}
      <Link to={`/brand/:${_id}`}>
      <button
        className={`${isSaleOn || "btn-disabled bg-gray-400"} 
        mt-6 w-full px-4 py-2 btn-outline hover:bg-amber-400 focus:border-amber-400 rounded-none
        text-white bg-[#0056D2]  shadow-2xl transition-all`}
        >
       {isSaleOn ? " View Coupons":"Not available"}
      </button>  
          </Link>
        </div>
    </div>

        </div>
    );
};

export default BrandsCard;