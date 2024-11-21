/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { FaBuilding, FaSmile, FaTicketAlt } from "react-icons/fa";

const StatisticsSection = () => {
    const [stats, setStats] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const textRef = useRef();
    const contRef = useRef();
    const [startCount, setStartCount] = useState(false);

    const iconsMap = {
        FaTicketAlt: <FaTicketAlt className="text- text-5xl" />,
        FaBuilding: <FaBuilding className="text- text-5xl" />,
        FaSmile: <FaSmile className="text- text-5xl" />,
      };
    
    useEffect(()=>{
        fetch("/stats.json")
        .then(res=> res.json())
        .then(data => setStats(data))
    },[])
 
    useEffect(()=>{
        const observer = new IntersectionObserver(
            ([entry])=>{
                if(entry.isIntersecting){
                    setIsVisible(true);
                    setStartCount(true);
                }
            },
            {threshold: 0.5}
        );
    
        if(textRef.current) observer.observe(textRef.current);
        if(startCount.current) observer.observe(startCount);
        return ()=> {
            if(textRef.current) observer.unobserve(textRef.current);
            if(startCount) observer.unobserve(startCount);
          }
    },[])


    //   useEffect(()=>{
    //     const observer = new IntersectionObserver(
    //         ([entry])=>{
    //             if(entry.isIntersecting){
    //                 setIsVisible(true);
    //             }
    //         },
    //         {threshold: 0.5}
    //     );
    
    //     if(textRef.current) observer.observe(textRef.current);
    
    //     return ()=> {
    //         if(textRef.current)
    //             { observer.unobserve(textRef.current)}
    //     }
    // },[])
    
    return (
            <div className="py-16 bg-base-100">
              <div className="text-center">
              <h3 ref={textRef} className={`font-bold text-xl md:text-2xl text-center uppercase
                 ${isVisible ? "animate__animated animate__backInLeft animate__delay-1s": ""} `}>Our Impact</h3>
                 <hr ref={textRef} className={`border-black w-1/2 md:w-3/12 mt-2 mx-auto ${isVisible ? "animate__animated animate__fadeInTopLeft animate__delay-1s": ""}`}></hr>
                <p className="text-gray-600 mb-8">
                  Trusted by thousands of users and brands worldwide.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="card bg-blue-50 shadow p-6 rounded-lg text-center hover:shadow-lg"
                  >
                    <div>{iconsMap[stat.icon]}</div>
                    <h3 ref={contRef} className="text-4xl font-bold text-gray-800">
                      {
                      ! startCount ? `${stat.value}` :<CountUp start={stat.value >9500 && 9905 || stat.value > 400 && 405 || 0} end={stat.value} delay={1}
                          duration={2.5}/>
                      }
                      {stat.label === "User Satisfaction"? "%" : "+"}
                    </h3>
                    <p className="text-gray-600 mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        };
   

export default StatisticsSection;