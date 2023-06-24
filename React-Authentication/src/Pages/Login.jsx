import { useEffect, useRef, useState } from 'react'
import { Window } from '../components/common/Window'
import { Heading } from '../components/elements/Heading/Heading'
import { TextInput } from '../components/forms/TextInput'
import { Button } from '../components/forms/Button'
import { useAuth } from '../context/Auth'
import { useLocation, useNavigate } from 'react-router-dom'
import { MultipleInput } from '../components/MultipleInput'
// import axios from '../api/axios'

export const Login = () => {
  const { setAuth } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [inputs, setInputs] = useState([])

  const from = location.state?.from?.pathname || '/'
  const elRef = useRef()
  const [userDetails, setUserDetails] = useState({
    username: '',
    password: ''
  })
  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
  }

  const onLoginSubmit = async (e) => {
    e.preventDefault()
    // const response = await axios.get('/users')
    // console.log(response.data)
    setAuth({
      username: userDetails.username,
      password: userDetails.password,
      roles: inputs.length > 0 ? inputs : ['user']
    })
    setUserDetails({ username: '', password: '', inputs: [] })
    navigate(from, { replace: true })
  }

  useEffect(() => {
    elRef.current && elRef.current.focus()
  }, [])

  return (
    <Window>
      <Heading
        className="text-black mb-5 text-center"
        level={1}
        title="Login"
      />
      <form onSubmit={onLoginSubmit}>
        <div className="grid grid-cols-6 gap-5">
          <TextInput
            ref={elRef}
            id="username"
            className="col-span-6 sm:col-span-4 sm:col-start-2 lg:col-start-3 lg:col-span-2"
            label="UserName"
            placeholder="John"
            required={true}
            autoComplete="off"
            value={userDetails.username}
            onChange={(e) => handleChange(e)}
          />
          <TextInput
            id="password"
            type="password"
            className="col-span-6 sm:col-span-4  sm:col-start-2
              lg:col-start-3 lg:col-span-2"
            label="Password"
            required={true}
            autoComplete="off"
            value={userDetails.password}
            onChange={(e) => handleChange(e)}
          />
          <MultipleInput inputs={inputs} setInputs={setInputs} />
          <Button
            type="submit"
            className="mt-2 max-w-xl col-span-6 sm:col-span-4 sm:col-start-2 lg:col-start-3 lg:col-span-2"
            variant="primary"
            disabled={!userDetails.username || !userDetails.password}
          >
            Sign In
          </Button>
        </div>
      </form>
    </Window>
  )
}
