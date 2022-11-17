import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <>
      <main className='bg-gray-100 container mx-auto mt-0 md:mt-0 p-0 md:flex md:justify-center'>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  )
}

export default AuthLayout
