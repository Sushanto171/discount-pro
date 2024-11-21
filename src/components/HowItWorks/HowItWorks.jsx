/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef, useState } from "react";
import { FaSearch, FaTags, FaClipboard, FaMoneyBillWave } from "react-icons/fa";

const HowItWorks = () => {
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef();
  const steps = [
    {
      id: 1,
      title: "Browse Top Brands or Brands page",
      description: "Explore deals from your favorite brands.",
      icon: <FaSearch className="text-primary text-xl" />,
    },
    {
      id: 2,
      title: "Select a Store",
      description: "Choose the best offer that suits you.",
      icon: <FaTags className="text-primary text-xl" />,
    },
    {
      id: 3,
      title: "Copy the Code or Redeem Online",
      description: "Copy the code and use it at checkout.",
      icon: <FaClipboard className="text-primary text-xl" />,
    },
    {
      id: 4,
      title: "Save Money Instantly",
      description: "Enjoy discounts on your purchases!",
      icon: <FaMoneyBillWave className="text-primary text-xl" />,
    },
  ];

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
    <div className=" mb-3">
      <div className="text-center">
      <h3 ref={textRef} className={`font-bold text-xl md:text-2xl text-center uppercase
        ${isVisible ? "animate__animated animate__backInRight animate__delay-1s": ""} `}>How It Works</h3>
        <hr ref={textRef} className={`border-black w-1/2 md:w-6/12 mt-2 mx-auto ${isVisible ? "animate__animated animate__fadeInTopRight animate__delay-1s": ""}`}></hr>

      </div>
      <div className=" w-full px-2 space-y-3 mt-8">
        {steps.map((step) => (
          <div 
            key={step.id}
            className="flex bg-blue-50 shadow p-6 rounded-lg text-center hover:shadow-lg"
          >
            <div className="">{step.icon}</div>
            <div className="pl-3  text-left">
            <h3 className="text-lg lg:text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
