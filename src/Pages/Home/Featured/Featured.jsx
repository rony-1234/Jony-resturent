 import './Featured.css'
import featuredImg from '../../../assets/service/home/featured.jpg';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
const Featured = () => {
    return (
        <section className='featured pt-8 my-10 bg-fixed'>
            <SectionTitle className='mt-12'
              subHeading='check it out'
              heading='From Our Menu'>

            </SectionTitle>
        <div className='flex gap-12 mt-16 px-36 py-12 text-white'>
            <div>
                <img src={featuredImg}/>
            </div>
            <div>
                <p> 16 March 2020</p>
                <p className='uppercase'>Where can i get some</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea deserunt provident alias adipisci veritatis, nulla recusandae sequi cumque quisquam nobis, dolorem dolorum at quis. Ducimus quasi explicabo sit alias, veniam error ipsum dolorum, 
                    odit nostrum dolorem animi perspiciatis eligendi!</p>
                    <button className="btn btn-outline btn-warning mt-4 border-0 border-b-4">Read More</button>
            </div>
        </div>
        </section>
    );
};

export default Featured;