import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";



const MenuCategory = ({items,img,title}) => {

    return (
        <div>
            {
                title && <Cover title={title} img={img}></Cover>
            }
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {
                     items.map(item =><MenuItem item={item} key={item._id}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;