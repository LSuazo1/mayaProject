import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const RutaProtegida = () => {
    const { auth, cargando } = useAuth()

    return (
        <>
            {!cargando ? (
                <main>
                    <div className=''>
                        <Outlet />
                    </div>
                </main>
            ) : <Navigate to="/" />}
        </>
    )
};

export default RutaProtegida;