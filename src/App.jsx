
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'

import Login from './paginas/Login'
import Registrar from './paginas/Registrar'
import NuevoPassword from './paginas/NuevoPassword'
import OlvidePassword from './paginas/OlvidePassword'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import Principal from './PrincipalComp/Principal'


import { AuthProvider } from './context/AuthProvider'
import FormularioProducto from './paginas/FormularioProducto'
import Galeria from './PrincipalComp/Galeria'
import RutaProtegida from './layouts/RutaProtegida'
import General from './PrincipalComp/General'


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<General />} />
            <Route path="registrar" element={<Registrar />} />
            <Route path="login" element={<Login />} />
            <Route path="olvide-password" element={<OlvidePassword />} />
            <Route path="olvide-password/:token" element={<NuevoPassword />} />
            <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            <Route path="registrarProducto" element={<FormularioProducto />} />
            <Route path="galeria" element={<Galeria />} />
          </Route>

          <Route path="/menu" element={<RutaProtegida />}>
            <Route index element={<General />} />
            <Route path="galeria" element={<Galeria />} />
          </Route>

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
