import {Link, NavLink} from 'react-router-dom';
// Link use instead of 'a' tag it cause the whole page refresh 

export default function Header(){
    return(
        <>
            <header className="sticky top-0 z-50 p-2">
                <nav className="p-2 bg-white/20 backdrop-blur-sm shadow-lg shadow-slate-300 rounded-2xl flex items-center justify-between">
                    <div>
                        <Link to="/" 
                              className="">
                            <img src="https://zemez.io/html/wp-content/uploads/sites/9/2018/01/logo.png" alt="Logo.jpg" 
                                className='w-28'/></Link>
                    </div>
                    <div>
                        <ul className='flex items-center justify-center gap-3'>
                            <li>
                                <NavLink to="/home"
                                         className={({isActive})=>
                                         `hover:text-orange-700 ${isActive?"text-orange-700":"text-black"} font-semibold`}>
                                Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about"
                                        className={({isActive})=>
                                         `hover:text-orange-700 ${isActive?"text-orange-700":"text-black"} font-semibold`}>
                                About</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact"
                                        className={({isActive})=>
                                         `hover:text-orange-700 ${isActive?"text-orange-700":"text-black"} font-semibold`}>
                                Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/github"
                                        className={({isActive})=>
                                         `hover:text-orange-700 ${isActive?"text-orange-700":"text-black"} font-semibold`}>
                                GitHub</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='flex gap-3 items-center justify-center'> 
                        <Link to="#" 
                            className='rounded-xl font-semibold p-2  hover:bg-gray-300 bg-gray-100'>
                        Login
                        </Link>
                        <Link to="#"
                             className='bg-orange-500 hover:bg-orange-600 p-2 rounded-xl font-semibold text-white'>
                        Get Started
                        </Link>
                    </div>
                </nav>
            </header>

        </>
    )
}