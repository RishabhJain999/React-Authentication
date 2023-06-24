import { useCallback, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useAuth } from '../context/Auth'

// eslint-disable-next-line react/prop-types
export const Protected = ({ children, allowedRoles }) => {
  console.log('running!')
  const waitmessage =
    "You're not logged In right now. We're redirect you to our login page!"

  const [timer, setTimer] = useState(5)
  const navigate = useNavigate()
  const location = useLocation()
  const { auth } = useAuth()
  console.log(auth)
  const waiting = useCallback(() => {
    setTimeout(() => {
      timer !== 1
        ? setTimer((prev) => prev - 1)
        : navigate('/login', {
            state: { from: location },
            replace: true
          })
    }, 1000)
  }, [location, navigate, timer])

  useEffect(() => {
    !auth && waiting()
  }, [auth, waiting])

  return auth?.roles.find((role) => allowedRoles?.includes(role)) ? (
    children
  ) : !auth ? (
    <div className="text-center">
      <h3 className=" font-bold">{waitmessage}</h3>
      <p className="text-sm">
        Redirecting in <span className="text-white">{timer}</span>
      </p>
    </div>
  ) : (
    <Navigate to="/unauthorised" state={{ from: location }} replace />
    // navigate('/unauthorised', {
    //   state: { from: location },
    //   replace: true
    // })
  )
}
