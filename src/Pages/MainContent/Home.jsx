import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import TopBrands from "../../components/TopBrands/TopBrands";
import { useContext, useEffect, useState } from "react";
import BrandOnSell from "../../components/BrandOnSell/BrandOnSell";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import { AuthContext } from "../../Hooks/AuthContext";

const Home = () => {
  const data = useLoaderData();
  const [isSellOn, setIsSellOn] = useState([]);
  const {setTitle} = useContext(AuthContext);
  useEffect(() => {
      setTitle("Home");
}, [setTitle]);


  useEffect(() => {
    const brands = data.filter((item) => item.isSaleOn === true);
    setIsSellOn(brands);
  }, [data]);

  return (
    <div>
      <Banner />
      <div className="w-11/12 sm:w-10/12 mx-auto">
 

        <TopBrands />
        <div className="sm:grid grid-cols-12 gap-2">

            {/* brand on sell */}
          <div className="col-span-8">
            <BrandOnSell isSellOn={isSellOn} />
          </div>

            <div className="col-span-4 overflow-hidden">
       
            <HowItWorks />
            </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
