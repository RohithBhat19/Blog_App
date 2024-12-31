import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { IoIosAddCircleOutline } from "react-icons/io";
const Layout = () => {
  const menu = [
    { text: 'Nature', path: '/' },
    { text: 'Travel', path: '/' },
    { text: 'Sports', path: '/' },
    { text: 'Food', path: '/' },
  ];

  return (
    <div className="flex flex-col min-h-screen ">
      
      <div className="border-b">
        <div className="flex justify-between px-5 py-5">
          <Link to="/">
            <span className="font-extrabold text-1xl text-blue-600" style={{boxShadow:"5px 5px 5px orange",borderRadius:"78%",padding:"4px"}}>Blogosphere</span>
          </Link>
          <div className="flex">
            <ul className="flex">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link
                    className="p-2 items-center justify-center flex"
                    to={`/?category=${item.text}`}
                  >
                    <span className='text-blue-600 font-medium hover:text-gray-500'>{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <button> 
              <Link to="/create"><IoIosAddCircleOutline className='text-black font-medium text-3xl ml-4'/></Link>
             </button> 
          </div>
        </div>
      </div>

      
      <div className="flex-grow">
        <div className="mt-5 mb-5 min-h-[500px] w-full px-5 md:px-20">
          <Outlet />
        </div>
      </div>

      
      <footer className="bg-slate-800 mt-auto">
  <div className="flex mx-auto px-10 py-6 items-center justify-center">
    <h3 className="text-gray-400 text-center">
      &copy; {new Date().getFullYear()} Explore Your World | All Rights Reserved
    </h3>
  </div>
</footer>

    </div>
  );
};

export default Layout;
