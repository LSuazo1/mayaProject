import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { IconChevronDown } from '@tabler/icons'
import useAuth from '../hooks/useAuth';
import Sidebar from './Sidebar'

const classNames = (...classes) => classes.filter(Boolean).join(' ')
const Megamenu = () => {
    const { cerrarSesion, auth } = useAuth();
    const categories = [
        {
            name: 'Eletronicos',
            slug: 'electronicos'
        },
        {
            name: 'Hogar',
            slug: 'hogar'
        }
    ]

    return (
        <div className='megamenu flex items-center bg-white w-full py-3 px-8'>
            <div className="left w-full">
                {/* <Sidebar /> */}
                <div>
                    <a href="/">
                        <h1 className='font-medium text-xl text-black'>Ecommerce</h1>
                    </a>
                </div>
            </div>
            <div className='w-full flex justify-end'>
                <nav>
                    <ul className='flex items-center gap-6 text-black font-medium'>
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <li>
                            <Popover className="relative">
                                {({ open }) => (
                                    <>
                                        <Popover.Button
                                            className={classNames(
                                                open ? 'text-gray-900' : '',
                                                'group inline-flex items-center rounded-md text-base'
                                            )}
                                        >
                                            Categorias
                                            <IconChevronDown className="ml-2 h-5 w-5" aria-hidden="true" />
                                        </Popover.Button>

                                        <Transition
                                            as={Fragment}
                                            enter="transition-opacity duration-75"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="transition-opacity duration-150"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Popover.Panel className="absolute w-52 mt-4 z-10">
                                                <div className="relative grid gap-1 rounded-md shadow-lg bg-white p-2">
                                                    {categories.map((category) => (
                                                        <a
                                                            key={category.name}
                                                            href={`/categorias/${category.slug}`}
                                                            className="flex items-start rounded-lg py-3 px-4 hover:bg-gray-50"
                                                        >
                                                            <div className="ml-2">
                                                                <p className="text-gray-900">{category.name}</p>
                                                                {/* <p className="mt-1 text-sm text-gray-500">{item.description}</p> */}
                                                            </div>
                                                        </a>
                                                    ))}
                                                </div>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )}
                            </Popover>
                        </li>
                        <li>
                            <a href="/login">Iniciar sesión</a>
                        </li>

                        <li>
                            {
                                auth.token && (
                                    <button
                                        type='button'
                                        className="text-white text-sm uppercase font-bold"
                                        onClick={cerrarSesion}
                                    >
                                        Cerrar Sesion
                                    </button>)
                            }
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Megamenu