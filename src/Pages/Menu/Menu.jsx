import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../assets/service/menu/banner3.jpg";

import UseMenu from "../../hook/UseMenu";
import SectionTitle from "../../component/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";
 import saladImg from '../../assets/service/menu/salad-bg.jpg'
 import dessertImg from '../../assets/service/menu/dessert-bg.jpeg'
 import pizzaImg from '../../assets/service/menu/pizza-bg.jpg'
 import soupImg from '../../assets/service/menu/soup-bg.jpg'
 import drinkImg from '../../assets/service/menu/banner3.jpg'
 import offeredImg from '../../assets/service/menu/banner3.jpg'


const Menu = () => {
    const [menu] = UseMenu()

    const salad =  menu.filter(item =>item.category === 'salad')
    const soup =  menu.filter(item =>item.category === 'soup')
    const pizza =  menu.filter(item =>item.category === 'pizza')
    const dessert =  menu.filter(item =>item.category === 'dessert')
    const drink =  menu.filter(item =>item.category === 'drink')
    const offered =  menu.filter(item =>item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
          
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle 
             subHeading='Do not miss out'
             heading='Today Offer'></SectionTitle>
             <MenuCategory items={salad} img={saladImg} title='Salad'></MenuCategory>
             <MenuCategory items={soup} img={soupImg} title='Soup'></MenuCategory>
             <MenuCategory items={pizza} img={pizzaImg} title='Pizza'></MenuCategory>
             <MenuCategory items={dessert} img={dessertImg} title='Drink'></MenuCategory>
             <MenuCategory items={offered} img={offeredImg} title='offered'></MenuCategory>
             <MenuCategory items={drink} img={drinkImg} title='offered'></MenuCategory>
            
           </div>
    );
};

export default Menu;