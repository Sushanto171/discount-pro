import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import TopBrands from "../../components/TopBrands/TopBrands";

const Home = () => {
    const data = useLoaderData();
    // console.log(data)
    return (
        <div>
            <Banner />
            <TopBrands />
        </div>
    );
};

export default Home;