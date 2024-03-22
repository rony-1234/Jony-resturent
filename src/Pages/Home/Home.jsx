import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopulerMenu from "./PopulerMenu/PopulerMenu";
import Service from "./Service/Service";
import Testimonial from "./Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>Bistro | Home</Helmet>
           <Banner></Banner>
           <Category></Category>
           <Service></Service>
           <PopulerMenu></PopulerMenu>
           <Featured></Featured>
           <Testimonial></Testimonial>

            
        </div>
    );
};

export default Home;