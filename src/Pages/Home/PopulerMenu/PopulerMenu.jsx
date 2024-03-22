import { useEffect, useState } from "react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import UseMenu from "../../../hook/UseMenu";


const PopulerMenu = ({heading,subHeading}) => {
    const [menu] = UseMenu()


      const populerItems = menu.filter(item => item.category === 'popular')
            
    
          
        

    return (
        <div>
            <section className="mb-12">
            <SectionTitle
              heading={'From Our Menu'}
              subHeading={'Cheack It Out'}>
                

            </SectionTitle>
            </section>

            <div className="grid grid-cols-2 gap-4">
                {
                    populerItems.map(item =><MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="flex items-center justify-center my-4">
            <button className="btn btn-outline  btn-warning mt-4 border-0 border-b-4">View Full Menu</button>
            </div>
           
        </div>
    );
};

export default PopulerMenu;