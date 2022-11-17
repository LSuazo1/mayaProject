import { useState, useEffect, createContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [cargando, setCargando] = useState(true);
    const [auth, setAuth] = useState({})
    const navigate=useNavigate()
    useEffect(() => {
        const auntenticarUsuario = async () => {
            try {
                const token = localStorage.getItem('token')
                if (!token) {
                    setCargando(false);
                    return;
                }
            } catch (error) {
                console.log(error.response.data.msg);
                setAuth({});
            }
            setCargando(false);
        }
        auntenticarUsuario();

    }, [cargando])

    const cerrarSesion = () => {
        localStorage.removeItem('token');
        setAuth({});
        navigate('/');
    }

    return (
        <AuthContext.Provider
            value={{
                setAuth,
                auth,
                cerrarSesion,
                cargando
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;