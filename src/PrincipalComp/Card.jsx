import React from 'react'
import { IconHeart } from '@tabler/icons'

const Card = ({ arreglo }) => {
    const { name, species, href, image } = arreglo;

    return (
        <>
            <div className="p-3 rounded-md bg-white">
                <div className="image">
                    <img className="w-full h-auto rounded-lg" src={image} alt="No se encuentra" />
                </div>
                <div className="price mt-4">
                    <h5 className="text-gray-900 text-xl font-medium">L. 00,000</h5>
                </div>
                <div className="name">
                    <h5 className="text-gray-900 text-xl font-medium mt-2">{name}</h5>
                </div>
                <div className="location">
                    <p className="text-gray-700 text-base mt-2">Tegucigalpa, Honduras</p>
                </div>
                <div className="toActionMenu flex items-center mt-2 justify-between">
                    <a href="/login" className='p-3 rounded-lg bg-blue-600 text-white font-medium text-center w-full ' >Mostrar Detalles</a>
                    <div className="wishlist p-4">
                        <IconHeart stroke={2} size="1.8rem" />    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
