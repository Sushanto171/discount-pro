import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import CouponCard from './../../components/CouponCard/CouponCard';
import { AuthContext } from "../../Hooks/AuthContext";

const Brand = () => {
  const {setTitle} = useContext(AuthContext);
    const {id} = useParams();
    const [brand, setBrand] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    useEffect(()=>{
       
        fetch("/data.json")
        .then(res => res.json())
        .then(data =>brands(data) )
        .catch(error =>setErrorMessage(error.message) );
        const brands = async (data)=>{
          const store =await data.filter(item => item._id === id);
          setBrand(store[0]);
        }
    },[id]);
    
const {brand_name, rating,  brand_logo, coupons, shop_Link, isSaleOn} = brand;
useEffect(() => {
  setTitle(brand_name);
}, [setTitle, brand_name]);

    if(errorMessage){
        return <h1 className="font-semibold text-red-700">{errorMessage}</h1>
    };
    return (
        <div className="w-11/12 sm:w-10/12 mx-auto">
            <div className="min-h-52 bg-contain relative" style={{backgroundImage : `url(${brand_logo})`}}>
                <div className="absolute bg-white/90 w-full h-full"></div>
                <div className="relative z-20 text-center mt-10 py- 5 flex flex-col justify-center items-center gap-5">
                <img className="w-20 bg-yellow-400 h-20 object-contain rounded-full p-1 shadow-2xl ring ring-black shadow-black" src={brand_logo} alt={brand_name} />
                <h3 className="font-semibold text-2xl md:text-3xl lg:text-4xl">Store Name: {brand_name}</h3>
                <div className="flex items-center text-yellow-500">
                <p className="text-black text-xl md:text-2xl lg:text-3xl"> Store rating: </p>
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar size={20}
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
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
                {
                   coupons && coupons.map(coupon =><CouponCard key={coupon.coupon_code} isSaleOn={isSaleOn}  coupon={coupon} shop_Link={shop_Link}/>)
                }
            </div>
        </div>
    );
};

export default Brand;