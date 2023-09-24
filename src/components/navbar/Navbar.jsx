import React, { Fragment, useContext, useState } from 'react'
import myContext from '../../context/data/myContext';
import { BsFillCloudSunFill } from 'react-icons/bs'
import { FiSun } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react'
import { RxCross2 } from 'react-icons/rx'
import { useSelector } from 'react-redux';

function Navbar() {
  const context = useContext(myContext);
  const {mode, toggleMode} = context;

  const [open, setOpen] = useState(false)

  const user = JSON.parse(localStorage.getItem('user'));

  // console.log(user.user.email)

  const logout = () => {
    localStorage.clear('user');
    window.location.href = '/login'
  }

  const cartItems = useSelector((state) => state.cart)

  return (
    <div className='bg-white sticky top-0 z-50'>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(40, 44, 52)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  
                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-900 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>

                  {user ? <div className="flow-root">
                    <Link to={'/order'} style={{ color: mode === 'dark' ? 'white' : '', }} className="-m-2 block p-2 font-medium text-gray-900">
                      Order
                    </Link>
                  </div> : ""}

                  {user?.user?.email === "nguyenle58111@gmailknupadhyay784.com" ? <div className="flow-root">
                    <Link to={'/dashboard'} className="-m-2 block p-2 font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      admin
                    </Link>
                  </div> : ""}

                {user ? <div className="flow-root">
                    <a onClick={logout} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Logout
                    </a>
                  </div> : <div className="flow-root">
                    <Link to={'/signup'}  className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer" style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Signup
                    </Link>
                  </div>}
                  <div className="flow-root">
                    <Link to={'/'} className="-m-2 block p-2 font-medium text-gray-900 cursor-pointer">
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://yt3.googleusercontent.com/mm2-5anuZ6ghmK2zL6QM7wciD6kuupOfOagiAh5vZE1hx9tRhKEXTAExZUUY4PVq2RSw9jBpBQ=s900-c-k-c0x00ffffff-no-rj"
                        alt="Dan_Abromov" />                                        </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '', }}>INDIA</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8" 
        style={{ backgroundColor: mode === 'dark' ? 'rgb(62 64 66)' : '', color: mode === 'dark' ? 'white' : '', }}>
          Get free delivery on orders over $300
        </p>

        <nav aria-label="Top" className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl " style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)} style={{ backgroundColor: mode === 'dark' ? 'rgb(80 82 87)' : '', color: mode === 'dark' ? 'white' : '', }}
              >
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={'/'} className='flex'>
                  <div className="flex ">
                    <h1 className=' text-2xl font-bold text-black  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>E-Commerce</h1>
                  </div>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">

                  <Link to={'/allproducts'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    All Products
                  </Link>
                 {user ?  <Link to={'/order'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Order
                  </Link> :   <Link to={'/signup'}  className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                      Signup
                    </Link>}

                  {user?.user?.email === 'nguyenle58111@gmail.com' ? 
                   <Link to={'/dashboard'} className="text-sm font-medium text-gray-700 " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Admin
                  </Link> : ""}
                  
                
                 {user ?  <a onClick={logout} className="text-sm font-medium text-gray-700 cursor-pointer  " style={{ color: mode === 'dark' ? 'white' : '', }}>
                    Logout
                  </a> : ""}
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="data:image/png;base64,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"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium" style={{ color: mode === 'dark' ? 'white' : '', }}>VIET NAM</span>
                  </a>
                </div>
                <div className="hidden lg:ml-8 lg:flex">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      className="inline-block w-10 h-10 rounded-full"
                      src="https://yt3.googleusercontent.com/mm2-5anuZ6ghmK2zL6QM7wciD6kuupOfOagiAh5vZE1hx9tRhKEXTAExZUUY4PVq2RSw9jBpBQ=s900-c-k-c0x00ffffff-no-rj"
                      alt="Dan_Abromov" />
                  </a>
                </div>

                <div className="flex lg:ml-6">
                  <button className='' onClick={toggleMode}>
                    {mode === 'light' ?
                      (<FiSun className='' size={30} />
                      ) : 'dark' ?
                        (<BsFillCloudSunFill size={30} />
                        ) : ''}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Link to={'/cart'} className="group -m-2 flex items-center p-2" style={{ color: mode === 'dark' ? 'white' : '', }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>

                    <span className="ml-2 text-sm font-medium text-gray-700 group-" style={{ color: mode === 'dark' ? 'white' : '', }}>{cartItems.length}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar