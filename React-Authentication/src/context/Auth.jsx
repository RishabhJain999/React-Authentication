import { createContext, useContext, useState } from 'react'

const authContext = createContext(null)

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(null)
  return (
    <authContext.Provider value={{ auth, setAuth }}>
      {children}
    </authContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const { auth, setAuth } = useContext(authContext)
  return { auth, setAuth }
}
