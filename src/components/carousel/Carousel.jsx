import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import photo1 from "../../assets/image.png";
import photo2 from "../../assets/image2.png";
import photo3 from "../../assets/image3.png";
const  ComCarousel=() => {

        return (
            <Carousel>
                <div>
                    <img src={photo1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={photo3} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={photo2} />
                    {/* <p className="legend ">Legend 2</p> */}
                </div>
                <div>
                    <img src={photo1} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={photo3} />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div>
                    <img src={photo1} />
                    {/* <p className="legend">Legend 4</p> */}
                </div>
            </Carousel>
        );
    }
export default ComCarousel;
