import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <>
      <main className=''>
        <div>
          <Outlet />
        </div>
      </main>

    </>

  )
}

export default AuthLayout
