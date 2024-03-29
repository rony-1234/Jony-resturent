import { Link } from "react-router-dom";


const Navbar = () => {

    const navs = <>
         <Link to='/'><li>Home</li></Link>
         <Link to='/menu'><li>Our Menu</li></Link>
         <Link to='/'><li>Contact</li></Link>
         <Link to='/'><li>Others</li></Link>
         <Link to='/'><li>Features</li></Link>
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 max-w-5xl bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm gap-8 dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navs}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Jony-resturent</a>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu gap-12 menu-horizontal px-1">
           {navs}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navbar;