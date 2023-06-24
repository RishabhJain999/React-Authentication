import { Route, Routes } from 'react-router-dom'
import { Home } from '../src/Pages/Home'
import { Login } from './Pages/Login'
import { Registration } from './Pages/Registeration'
import { Admin } from './Pages/Admin'
import { Editor } from './Pages/Editor'
import { NotFound } from './Pages/NotFound'
import { Lounge } from './Pages/Lounge'
import { AllLinks } from './Pages/AllLinks'
import { Protected } from './components/Protected'
import { Unauthorised } from './Pages/Unauthorised'
function App() {
  return (
    <div className="bg-blue-500 min-h-screen flex flex-col justify-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route
          path="/admin"
          element={
            <Protected allowedRoles={['admin']}>
              <Admin />
            </Protected>
          }
        />
        <Route
          path="/editor"
          element={
            <Protected allowedRoles={['editor']}>
              <Editor />
            </Protected>
          }
        />
        <Route
          path="/lounge"
          element={
            <Protected allowedRoles={['admin', 'editor']}>
              <Lounge />
            </Protected>
          }
        />
        <Route path="/links" element={<AllLinks />} />
        <Route path="/unauthorised" element={<Unauthorised />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
