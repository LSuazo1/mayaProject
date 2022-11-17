import React from 'react'

const BtnUser = () => {
  return (
    <>
    
<button data-popover-target="popover-user-profile" 
 className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 
 dark:hover:bg-teal-600  w-full mt-2 border-t border-gray-300">
    <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
   <span className="ml-3">Mi perfil</span>
<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
</button>
                   
<div data-popover id="popover-user-profile" role="tooltip" 
className="absolute z-10 invisible inline-block w-64 text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
    <div className="p-3">
        <div className="flex items-center justify-between mb-2">
            <a href="#">
            <button  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium 
            rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Ver mas</button>
            </a>
            <div>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              className="w-20"
              alt="Wild Landscape"
            />
         </div>

        </div>
        <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <a href="#">Nombre:</a>
        </p>
        <p className="mb-3 text-sm font-normal">
            <a href="#" className="hover:underline">Karen Nohemy Lopez</a>
        </p>

        <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <a href="#">Correo electónico:</a>
        </p>
        <p className="mb-3 text-sm font-normal">
            <a href="#" className="hover:underline">karen@gmail.com</a>
        </p>

        <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <a href="#">Teléfono:</a>
        </p>
        <p className="mb-3 text-sm font-normal">
            <a href="#" className="hover:underline">9579-0063</a>
        </p>

        <ul className="flex text-sm font-light">
            <li className="mr-2">
                <a href="#" className="hover:underline">
                    <span className="font-semibold text-gray-900 dark:text-white">Departamento</span>
                </a>
            </li>
            <li>
                <a href="#" className="hover:underline">
                    <span className="font-semibold text-gray-900 dark:text-white">Municipio</span>
                </a>
            </li>
        </ul>
    </div>
    <div data-popper-arrow></div>
</div>

    </>
   
  )
}

export default BtnUser