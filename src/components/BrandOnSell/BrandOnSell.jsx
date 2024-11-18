/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useRef, useState } from "react";
import SellOnCard from "../sellOnCard/SellOnCard";
import 'animate.css';
import { AuthContext } from "../../Hooks/AuthContext";
const BrandOnSell = (props) => {
    const {isSellOn: brands} = props || [];
const [isVisible, setIsVisible] = useState(false);
const textRef = useRef();
const {branOnSellRef} = useContext(AuthContext);
useEffect(()=>{
    const observer = new IntersectionObserver(
        ([entry])=>{
            if(entry.isIntersecting){
                setIsVisible(true);
            }
        },
        {threshold: 0.5}
    );

    if(textRef.current) observer.observe(textRef.current);

    return ()=> {
        if(textRef.current)
            { observer.unobserve(textRef.current)}
    }
},[])

    return (
        <div ref={branOnSellRef}>
            <h3 ref={textRef} className={`font-bold text-xl md:text-2xl text-center uppercase
                 ${isVisible ? "animate__animated animate__fadeInDown animate__delay-1s": ""} `}>Brands On Sell</h3>
                 <hr ref={textRef} className={`border-black w-1/2 md:w-3/12 mt-2 mx-auto ${isVisible ? "animate__animated animate__fadeInTopLeft animate__delay-1s": ""}`}></hr>
  
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 my-8">
            {
                brands.map(item => <SellOnCard item={item} key={item._id} />)
            }
            </div>
        </div>
    );
};

export default BrandOnSell;